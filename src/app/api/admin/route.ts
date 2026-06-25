import { NextRequest, NextResponse } from "next/server";
import { getSurveys, getWaitlist } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function authorized(req: NextRequest): boolean {
  const expectedUser = process.env.ADMIN_USERNAME || "admin";
  const expectedPass = process.env.ADMIN_PASSWORD || "Miller31!";
  const url = new URL(req.url);
  const user =
    req.headers.get("x-admin-username") || url.searchParams.get("username");
  const pass =
    req.headers.get("x-admin-password") || url.searchParams.get("password");
  return user === expectedUser && pass === expectedPass;
}

export async function GET(req: NextRequest) {
  if (!authorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const surveys = await getSurveys();
    const waitlist = await getWaitlist();
    return NextResponse.json({
      ok: true,
      stats: {
        surveyCount: surveys.length,
        waitlistCount: waitlist.length,
        earlyAccessCount: surveys.filter((s) => s.wantsEarlyAccess === "Yes")
          .length,
        creatorCount: surveys.filter((s) => s.hostsEvents === "Yes").length,
      },
      surveys,
      waitlist,
    });
  } catch (err) {
    console.error("Admin fetch failed:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
