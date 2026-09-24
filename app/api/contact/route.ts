import { NextResponse } from "next/server";
import { inquirySubjects } from "@/lib/site";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TEL_RE = /^[0-9+\-() ]{8,30}$/;

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/\r\n/g, "\n").trim().slice(0, max) : "";
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "リクエストが不正です。" }, { status: 400 });
  }

  // Honeypot: pretend success so bots don't retry
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const subject = clean(body.subject, 20);
  const name = oneLine(clean(body.name, 100));
  const tel = clean(body.tel, 30);
  const email = clean(body.email, 200);
  const message = clean(body.message, 4000);

  if (!(inquirySubjects as readonly string[]).includes(subject)) {
    return NextResponse.json({ error: "件名を選択してください。" }, { status: 400 });
  }
  if (!name) {
    return NextResponse.json({ error: "お名前を入力してください。" }, { status: 400 });
  }
  if (!TEL_RE.test(tel)) {
    return NextResponse.json({ error: "電話番号の形式をご確認ください。" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "メールアドレスの形式をご確認ください。" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "info@monairjapan.co.jp";
  const from = process.env.CONTACT_FROM_EMAIL;

  const text = [
    "ウェブサイトからお問い合わせがありました。",
    "",
    `件名　　：${subject}`,
    `お名前　：${name}`,
    `電話番号：${tel}`,
    `メール　：${email}`,
    "",
    "【お問い合わせ内容】",
    message || "（記入なし）",
  ].join("\n");

  if (!apiKey || !from) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[contact] mail not configured; dev mode payload:\n" + text);
      return NextResponse.json({ ok: true });
    }
    console.error("[contact] RESEND_API_KEY / CONTACT_FROM_EMAIL is not set");
    return NextResponse.json(
      { error: "現在フォームをご利用いただけません。お手数ですがお電話またはメールでご連絡ください。" },
      { status: 503 },
    );
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `【HPお問い合わせ】${subject}｜${name}`,
        text,
      }),
    });
    if (!res.ok) {
      console.error("[contact] Resend error", res.status, await res.text());
      return NextResponse.json({ error: "送信に失敗しました。時間をおいて再度お試しください。" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed", err);
    return NextResponse.json({ error: "送信に失敗しました。時間をおいて再度お試しください。" }, { status: 502 });
  }
}
