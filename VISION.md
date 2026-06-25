# SoMingle — Vision & Intelligence Roadmap

> **SoMingle is the world's first Trusted Live Intelligence System that powers
> criteria-curated social experiences.**
>
> We're not building an event app, a dating app, or "Meetup 2.0." We're building
> the **intelligence layer behind real-world human connection.**

This document captures the longer-term product and IP direction so the survey
we ship today is built as the first data layer of that system — not a
throwaway form.

---

## Where today's survey fits

Every response collected at `/survey` is the **seed dataset** for the
intelligence layer below. The survey already captures structured, machine-usable
signals (vibe words, music preferences, affordability, meeting style, desired
outcomes, host vs. attendee) rather than only free text — so it can feed
categorization and recommendations later without re-collection.

---

## 1. Dynamic Intelligence (categorization pipeline)

Every answer should resolve into **categories**, not just raw responses. Each
signal cascades into progressively richer context:

```
Music → Afrobeats → High Energy → Social → Dance Events
      → Toronto → Weekend → Outdoor → Young Professionals → Future Recommendation
```

**Implication for engineering:** as volume grows, add a normalization step that
maps each raw answer to tags (genre → energy → setting → audience → geo → time).
Store the derived tags alongside the raw record so recommendations read tags,
not strings.

## 2. Analytics → "SoMingle Intelligence"

Don't store only responses — **store insights.** The admin dashboard already
surfaces several of these (computed on read); the roadmap is to precompute and
trend them over time:

- Top frustrations &middot; Top event types &middot; Average affordability score
- Most desired city &middot; Top music genre &middot; Most desired networking type
- Biggest reason people don't attend &middot; Average host challenges
- Host vs. attendee comparison &middot; Repeat themes &middot; keyword cloud
- Heat maps &middot; trend changes over time &middot; demographic comparisons

## 3. AI Layer (searchable intelligence)

Eventually every answer becomes queryable in natural language:

> "Show me women 25–34, interested in wellness, love Afrobeats, want
> entrepreneurship, prefer small groups, rated authenticity 5/5, live in
> Toronto."

That is no longer survey data — that's **intelligence.** The structured fields
captured today are intentionally chosen to make this query layer possible.

## 4. SoMingle × Yo DJ

The Music section is the integration seam. Genre / energy / "would you attend
for the DJ" / "discover new DJs" signals connect attendees to DJs and let
organizers curate sound to the room's actual vibe.

---

## The IP concept to document

**Trusted Live Intelligence System** — not just a survey, but a continuously
learning system that:

- Collects behavioral preferences
- Learns social intent
- Measures vibe compatibility
- Predicts event success
- Curates experiences
- Improves recommendations over time
- Provides organizers with **real-time community intelligence**

This broader system concept is the core of SoMingle's IP strategy and should be
formally documented/protected as the platform matures.

---

## Guiding principle

**Don't wait for perfection.** The existing email list is more valuable than
another month of tweaking. The first wave of real responses will validate
assumptions, reveal surprises, and inspire features no roadmap predicted —
ship, collect, learn.
