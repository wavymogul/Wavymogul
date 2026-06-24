import Database from "better-sqlite3";
import fs from "fs";
import path from "path";
import type {
  SurveyPayload,
  SurveyRecord,
  WaitlistPayload,
  WaitlistRecord,
} from "./types";

// Resolve the database location. Defaults to <project>/data/somingle.db but can
// be overridden with SOMINGLE_DB_PATH for persistent volumes in production.
function resolveDbPath(): string {
  if (process.env.SOMINGLE_DB_PATH) return process.env.SOMINGLE_DB_PATH;
  const dir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  return path.join(dir, "somingle.db");
}

// Reuse a single connection across hot reloads in dev.
const globalForDb = globalThis as unknown as { somingleDb?: Database.Database };

function getDb(): Database.Database {
  if (globalForDb.somingleDb) return globalForDb.somingleDb;

  const db = new Database(resolveDbPath());
  db.pragma("journal_mode = WAL");

  db.exec(`
    CREATE TABLE IF NOT EXISTS survey_responses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      created_at TEXT NOT NULL,
      full_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      instagram TEXT,
      age_range TEXT,
      city TEXT,
      occupation TEXT,
      status TEXT,
      event_frustrations TEXT,
      going_out_less TEXT,
      worth_attending TEXT,
      spent_and_disappointed TEXT,
      disappointed_why TEXT,
      experience_interests TEXT,
      motivation TEXT,
      missing_in_city TEXT,
      hoping_to_gain TEXT,
      meeting_preference TEXT,
      affordability_importance INTEGER,
      like_minded_importance INTEGER,
      hosts_events TEXT,
      event_type TEXT,
      creator_challenges TEXT,
      how_somingle_helps TEXT,
      dream_event TEXT,
      wants_early_access TEXT,
      roles_interested TEXT
    );

    CREATE TABLE IF NOT EXISTS waitlist (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      created_at TEXT NOT NULL,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE
    );
  `);

  globalForDb.somingleDb = db;
  return db;
}

const arr = (v: string[] | undefined) => JSON.stringify(v ?? []);
const parseArr = (v: string | null): string[] => {
  if (!v) return [];
  try {
    const parsed = JSON.parse(v);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export function insertSurvey(p: SurveyPayload): SurveyRecord {
  const db = getDb();
  const createdAt = new Date().toISOString();
  const stmt = db.prepare(`
    INSERT INTO survey_responses (
      created_at, full_name, email, phone, instagram, age_range, city,
      occupation, status, event_frustrations, going_out_less, worth_attending,
      spent_and_disappointed, disappointed_why, experience_interests, motivation,
      missing_in_city, hoping_to_gain, meeting_preference, affordability_importance,
      like_minded_importance, hosts_events, event_type, creator_challenges,
      how_somingle_helps, dream_event, wants_early_access, roles_interested
    ) VALUES (
      @createdAt, @fullName, @email, @phone, @instagram, @ageRange, @city,
      @occupation, @status, @eventFrustrations, @goingOutLess, @worthAttending,
      @spentAndDisappointed, @disappointedWhy, @experienceInterests, @motivation,
      @missingInCity, @hopingToGain, @meetingPreference, @affordabilityImportance,
      @likeMindedImportance, @hostsEvents, @eventType, @creatorChallenges,
      @howSomingleHelps, @dreamEvent, @wantsEarlyAccess, @rolesInterested
    )
  `);

  const info = stmt.run({
    createdAt,
    fullName: p.fullName,
    email: p.email,
    phone: p.phone ?? null,
    instagram: p.instagram ?? null,
    ageRange: p.ageRange,
    city: p.city,
    occupation: p.occupation,
    status: p.status,
    eventFrustrations: p.eventFrustrations,
    goingOutLess: p.goingOutLess,
    worthAttending: p.worthAttending,
    spentAndDisappointed: p.spentAndDisappointed,
    disappointedWhy: p.disappointedWhy,
    experienceInterests: arr(p.experienceInterests),
    motivation: p.motivation,
    missingInCity: p.missingInCity,
    hopingToGain: arr(p.hopingToGain),
    meetingPreference: p.meetingPreference,
    affordabilityImportance: p.affordabilityImportance,
    likeMindedImportance: p.likeMindedImportance,
    hostsEvents: p.hostsEvents,
    eventType: p.eventType,
    creatorChallenges: arr(p.creatorChallenges),
    howSomingleHelps: p.howSomingleHelps,
    dreamEvent: p.dreamEvent,
    wantsEarlyAccess: p.wantsEarlyAccess,
    rolesInterested: arr(p.rolesInterested),
  });

  return { id: Number(info.lastInsertRowid), createdAt, ...p };
}

type SurveyRow = Record<string, string | number | null>;

const s = (v: string | number | null): string => (v == null ? "" : String(v));
const n = (v: string | number | null): number => {
  const num = Number(v);
  return Number.isFinite(num) ? num : 0;
};
const asArr = (v: string | number | null): string =>
  typeof v === "string" ? v : "";

function rowToSurvey(r: SurveyRow): SurveyRecord {
  return {
    id: n(r.id),
    createdAt: s(r.created_at),
    fullName: s(r.full_name),
    email: s(r.email),
    phone: r.phone ? s(r.phone) : undefined,
    instagram: r.instagram ? s(r.instagram) : undefined,
    ageRange: s(r.age_range),
    city: s(r.city),
    occupation: s(r.occupation),
    status: s(r.status),
    eventFrustrations: s(r.event_frustrations),
    goingOutLess: s(r.going_out_less),
    worthAttending: s(r.worth_attending),
    spentAndDisappointed: s(r.spent_and_disappointed),
    disappointedWhy: s(r.disappointed_why),
    experienceInterests: parseArr(asArr(r.experience_interests)),
    motivation: s(r.motivation),
    missingInCity: s(r.missing_in_city),
    hopingToGain: parseArr(asArr(r.hoping_to_gain)),
    meetingPreference: s(r.meeting_preference),
    affordabilityImportance: n(r.affordability_importance),
    likeMindedImportance: n(r.like_minded_importance),
    hostsEvents: s(r.hosts_events),
    eventType: s(r.event_type),
    creatorChallenges: parseArr(asArr(r.creator_challenges)),
    howSomingleHelps: s(r.how_somingle_helps),
    dreamEvent: s(r.dream_event),
    wantsEarlyAccess: s(r.wants_early_access),
    rolesInterested: parseArr(asArr(r.roles_interested)),
  };
}

export function getSurveys(): SurveyRecord[] {
  const db = getDb();
  const rows = db
    .prepare("SELECT * FROM survey_responses ORDER BY id DESC")
    .all() as SurveyRow[];
  return rows.map(rowToSurvey);
}

export function insertWaitlist(p: WaitlistPayload): WaitlistRecord {
  const db = getDb();
  const createdAt = new Date().toISOString();
  // Upsert by email so re-submitting is idempotent.
  const stmt = db.prepare(`
    INSERT INTO waitlist (created_at, name, email)
    VALUES (@createdAt, @name, @email)
    ON CONFLICT(email) DO UPDATE SET name = excluded.name
    RETURNING id, created_at, name, email
  `);
  const row = stmt.get({ createdAt, name: p.name, email: p.email }) as {
    id: number;
    created_at: string;
    name: string;
    email: string;
  };
  return {
    id: row.id,
    createdAt: row.created_at,
    name: row.name,
    email: row.email,
  };
}

export function getWaitlist(): WaitlistRecord[] {
  const db = getDb();
  const rows = db
    .prepare("SELECT * FROM waitlist ORDER BY id DESC")
    .all() as Array<{
    id: number;
    created_at: string;
    name: string;
    email: string;
  }>;
  return rows.map((r) => ({
    id: r.id,
    createdAt: r.created_at,
    name: r.name,
    email: r.email,
  }));
}
