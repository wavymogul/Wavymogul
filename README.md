# SoMingle

> **Connect Better. Experience More.**
> The future of social connection, community, networking, and experiences.

SoMingle is a premium, mobile-first research & waitlist platform built to
understand why events feel worse than they used to — and to design a new
category of curated social experiences around what people *actually* want.

This repository contains the marketing site, a multi-step research survey, a
waitlist capture flow, and an admin dashboard for reviewing responses.

## ✨ Features

- **High-conversion landing page** — hero, problem breakdown, vision, research
  CTA, testimonial wall, and waitlist capture.
- **6-step research survey** (`/survey`) with an animated progress bar,
  conditional questions, checkboxes, scale sliders, and validation.
- **Waitlist system** with idempotent email capture.
- **Admin dashboard** (`/admin`) — password-gated, with live stats, insight
  charts (most-wanted experiences, desired outcomes), full response detail
  views, and CSV export.
- **SQLite persistence** via `better-sqlite3` — submissions are stored in a
  local database, no external service required.
- Dark-mode-by-default premium UI: glassmorphism, brand gradients (purple,
  blue, pink, gold), Framer Motion animations, smooth scrolling.
- SEO-ready: metadata, Open Graph, `robots.txt`, and `sitemap.xml`.

## 🧱 Tech Stack

| Layer      | Choice                                  |
| ---------- | --------------------------------------- |
| Framework  | Next.js 14 (App Router) + TypeScript    |
| Styling    | Tailwind CSS                            |
| Animation  | Framer Motion                           |
| Icons      | lucide-react                            |
| Database   | SQLite (`better-sqlite3`)               |

## 🚀 Getting Started

```bash
npm install
cp .env.example .env    # then edit ADMIN_PASSWORD
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

- Landing page: `/`
- Research survey: `/survey`
- Admin dashboard: `/admin` (uses `ADMIN_PASSWORD`, default `somingle-admin`)

## ⚙️ Configuration

| Variable               | Description                                          | Default               |
| ---------------------- | ---------------------------------------------------- | --------------------- |
| `ADMIN_PASSWORD`       | Password for the `/admin` dashboard.                 | `somingle-admin`      |
| `SOMINGLE_DB_PATH`     | Absolute path to the SQLite file (use a volume).     | `./data/somingle.db`  |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for SEO metadata & sitemap.       | `https://somingle.io` |

> **Heads up for serverless deploys:** the default SQLite file lives on the
> local filesystem. On platforms with ephemeral filesystems (e.g. Vercel),
> point `SOMINGLE_DB_PATH` at a persistent volume, or swap `src/lib/db.ts` for
> a hosted database (Postgres, Turso, Supabase).

## 📡 API

| Method | Route           | Purpose                                  |
| ------ | --------------- | ---------------------------------------- |
| `POST` | `/api/survey`   | Store a survey response.                 |
| `POST` | `/api/waitlist` | Add an email to the waitlist (upsert).   |
| `GET`  | `/api/admin`    | Fetch all data (requires admin password).|

## 🏗️ Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
  app/
    page.tsx            # landing page
    survey/page.tsx     # multi-step survey
    admin/page.tsx      # admin dashboard
    api/                # survey, waitlist, admin routes
    sitemap.ts, robots.ts
  components/            # UI sections, survey, admin
  lib/                  # db, types, survey options
```
