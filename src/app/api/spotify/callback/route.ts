import { NextRequest, NextResponse } from "next/server";
import {
  getRedirectUri,
  exchangeCodeForToken,
  fetchVibeProfile,
  encodeProfile,
  VIBE_COOKIE,
  STATE_COOKIE,
} from "@/lib/spotify";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const origin = url.origin;
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const error = url.searchParams.get("error");
  const savedState = req.cookies.get(STATE_COOKIE)?.value;

  const fail = (reason: string) =>
    NextResponse.redirect(`${origin}/events?spotify=${reason}`);

  if (error) return fail("denied");
  if (!code || !state || !savedState || state !== savedState) {
    return fail("error");
  }

  try {
    const token = await exchangeCodeForToken(code, getRedirectUri(origin));
    const profile = await fetchVibeProfile(token);

    const res = NextResponse.redirect(`${origin}/events?spotify=connected`);
    res.cookies.set(VIBE_COOKIE, encodeProfile(profile), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
    res.cookies.delete(STATE_COOKIE);
    return res;
  } catch (err) {
    console.error("Spotify callback failed:", err);
    return fail("error");
  }
}
