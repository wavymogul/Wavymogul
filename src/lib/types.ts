// Shared types for SoMingle survey + waitlist data.

export type SurveyPayload = {
  // Step 1 — About You
  fullName: string;
  email: string;
  phone?: string;
  instagram?: string;
  ageRange: string;
  city: string;
  occupation: string;
  status: string;

  // Step 2 — Real Talk
  eventFrustrations: string;
  goingOutLess: string;
  worthAttending: string;
  spentAndDisappointed: string; // "Yes" | "No"
  disappointedWhy: string;

  // Step 3 — What Do You Actually Want
  experienceInterests: string[];
  motivation: string;
  missingInCity: string;

  // Step 4 — Connection Style
  hopingToGain: string[];
  meetingPreference: string;
  affordabilityImportance: number; // 1-10
  likeMindedImportance: number; // 1-10

  // Step 5 — Event Creator
  hostsEvents: string; // "Yes" | "No"
  eventType: string;
  creatorChallenges: string[];
  howSomingleHelps: string;

  // Step 6 — The Future
  dreamEvent: string;
  wantsEarlyAccess: string; // "Yes" | "No"
  rolesInterested: string[];
};

export type SurveyRecord = SurveyPayload & {
  id: number;
  createdAt: string;
};

export type WaitlistPayload = {
  name: string;
  email: string;
};

export type WaitlistRecord = WaitlistPayload & {
  id: number;
  createdAt: string;
};
