import { NextRequest, NextResponse } from "next/server";
import { spotifyConfigured, decodeProfile, VIBE_COOKIE } from "@/lib/spotify";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const profile = decodeProfile(req.cookies.get(VIBE_COOKIE)?.value);
  return NextResponse.json({
    configured: spotifyConfigured(),
    connected: Boolean(profile),
    profile,
  });
}
