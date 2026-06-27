import { NextRequest, NextResponse } from "next/server";
import { getStoredEvents, insertEvent, deleteEvent } from "@/lib/db";
import { SAMPLE_EVENTS } from "@/lib/events-data";
import type { EventPayload } from "@/lib/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function adminAuthorized(req: NextRequest): boolean {
  const expectedUser = process.env.ADMIN_USERNAME || "admin";
  const expectedPass = process.env.ADMIN_PASSWORD || "Miller31!";
  return (
    req.headers.get("x-admin-username") === expectedUser &&
    req.headers.get("x-admin-password") === expectedPass
  );
}

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

// Public: list events. Falls back to curated samples when none are stored yet,
// so the page is never empty. Supports ?city= and ?category= filters.
export async function GET(req: NextRequest) {
  try {
    const stored = await getStoredEvents();
    let events = stored.length > 0 ? stored : SAMPLE_EVENTS;
    const sample = stored.length === 0;

    const url = new URL(req.url);
    const city = url.searchParams.get("city");
    const category = url.searchParams.get("category");
    if (city && city !== "All") {
      events = events.filter((e) => e.city === city);
    }
    if (category && category !== "All") {
      events = events.filter((e) => e.category === category);
    }

    return NextResponse.json({ ok: true, sample, events });
  } catch (err) {
    console.error("Failed to load events:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// Admin: create an event.
export async function POST(req: NextRequest) {
  if (!adminAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }
  const b = body as Record<string, unknown>;
  if (!str(b.title)) {
    return NextResponse.json({ error: "Title is required." }, { status: 400 });
  }

  const payload: EventPayload = {
    title: str(b.title),
    description: str(b.description),
    category: str(b.category) || "Nightlife",
    city: str(b.city),
    venue: str(b.venue),
    date: str(b.date),
    time: str(b.time),
    priceFrom: Number.isFinite(Number(b.priceFrom)) ? Number(b.priceFrom) : 0,
    imageUrl: str(b.imageUrl),
    ticketUrl: str(b.ticketUrl) || "#",
    organizer: str(b.organizer),
    trending: Boolean(b.trending),
  };

  try {
    const record = await insertEvent(payload);
    return NextResponse.json({ ok: true, id: record.id }, { status: 201 });
  } catch (err) {
    console.error("Failed to create event:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// Admin: delete an event by id (?id= or JSON body { id }).
export async function DELETE(req: NextRequest) {
  if (!adminAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const url = new URL(req.url);
  let id = Number(url.searchParams.get("id"));
  if (!Number.isFinite(id) || id === 0) {
    try {
      const b = (await req.json()) as { id?: number };
      id = Number(b.id);
    } catch {
      /* ignore */
    }
  }
  if (!Number.isFinite(id) || id === 0) {
    return NextResponse.json({ error: "Valid id required." }, { status: 400 });
  }
  try {
    await deleteEvent(id);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to delete event:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
