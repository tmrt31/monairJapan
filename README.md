# MON AIR JAPAN website

Japanese corporate site for モン・エア・ジャパン株式会社, built from the `ホームページ.docx` wireframe.
Next.js (App Router) + TypeScript, plain CSS, no UI framework.

## Pages

| Route | Content |
| --- | --- |
| `/` | Hero, company intro, services, partner logos, contact form |
| `/tickets-tours` | 航空券手配 (`#tickets`) and ツアー (`#tours`), contact form |
| `/cargo` | 航空貨物, logistics network diagram, strengths, contact form |
| `/company` | 会社概要 and 沿革 |
| `/contact` | Address, hours, TEL/FAX/email, Facebook, contact form |

Also included: `sitemap.xml`, `robots.txt`, favicon, Open Graph tags, JSON-LD, 404 page.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Requires Node 20.9+. In development the contact form logs the message to the terminal instead of sending mail.

## Deploy (Vercel)

1. Push this folder to a Git repository and import it in Vercel (framework is auto-detected, no build settings needed).
2. Add the environment variables below in Project Settings → Environment Variables.
3. Add your domain under Settings → Domains.

## Environment variables

| Name | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public URL, used by sitemap, canonical and OG tags |
| `RESEND_API_KEY` | API key from https://resend.com |
| `CONTACT_FROM_EMAIL` | Sender, must be on a domain verified in Resend, e.g. `MON AIR JAPAN サイト <noreply@monairjapan.co.jp>` |
| `CONTACT_TO_EMAIL` | Inbox that receives inquiries (default `info@monairjapan.co.jp`) |

In production the form returns a "currently unavailable, please call or email" message until `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` are set.

## Editing content

- Company data, addresses, nav labels, inquiry subjects, history: `lib/site.ts`
- Page copy: `app/*/page.tsx`
- Colors and typography: CSS variables at the top of `app/globals.css`
- Images: `public/images/`

History entries with empty text are hidden automatically; fill in 2024–2026 in `lib/site.ts`.
