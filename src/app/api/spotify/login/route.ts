import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import {
  spotifyConfigured,
  getRedirectUri,
  buildAuthorizeUrl,
  STATE_COOKIE,
} from "@/lib/spotify";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const origin = new URL(req.url).origin;
  if (!spotifyConfigured()) {
    return NextResponse.redirect(`${origin}/events?spotify=unconfigured`);
  }

  const state = crypto.randomBytes(16).toString("hex");
  const redirectUri = getRedirectUri(origin);
  const res = NextResponse.redirect(buildAuthorizeUrl(state, redirectUri));
  res.cookies.set(STATE_COOKIE, state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 600,
  });
  return res;
}
