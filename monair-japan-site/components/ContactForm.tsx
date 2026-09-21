"use client";

import { useId, useState, type FormEvent } from "react";
import { inquirySubjects } from "@/lib/site";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "success" }
  | { state: "error"; message: string };

export default function ContactForm({
  heading = "お問い合わせ",
  as: Heading = "h2",
}: {
  heading?: string;
  as?: "h2" | "h3";
}) {
  const uid = useId();
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const id = (name: string) => `${uid}-${name}`;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.state === "sending") return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setStatus({
          state: "error",
          message:
            json.error ??
            "送信できませんでした。時間をおいて再度お試しいただくか、お電話・メールでご連絡ください。",
        });
        return;
      }
      form.reset();
      setStatus({ state: "success" });
    } catch {
      setStatus({
        state: "error",
        message: "通信に失敗しました。ネットワーク環境をご確認のうえ、再度お試しください。",
      });
    }
  }

  const sending = status.state === "sending";

  return (
    <div className="contact-box">
      <Heading>{heading}</Heading>
      <form onSubmit={onSubmit}>
        <div className="form-grid">
          <div className="form-col">
            <div className="field">
              <label htmlFor={id("subject")}>件名<span className="req" aria-hidden="true">*</span></label>
              <select id={id("subject")} name="subject" required defaultValue="">
                <option value="" disabled>選択してください</option>
                {inquirySubjects.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor={id("name")}>名前<span className="req" aria-hidden="true">*</span></label>
              <input id={id("name")} name="name" type="text" autoComplete="name" required maxLength={100} placeholder="お名前（フルネーム）" />
            </div>
            <div className="field">
              <label htmlFor={id("tel")}>電話番号<span className="req" aria-hidden="true">*</span></label>
              <input id={id("tel")} name="tel" type="tel" autoComplete="tel" required maxLength={30} pattern="[0-9+\-() ]{8,30}" title="数字とハイフンで入力してください（例：070-1234-5678）" placeholder="070-1234-5678" />
            </div>
            <div className="field">
              <label htmlFor={id("email")}>メール<span className="req" aria-hidden="true">*</span></label>
              <input id={id("email")} name="email" type="email" autoComplete="email" required maxLength={200} placeholder="example@mail.com" />
            </div>
          </div>
          <div className="form-col form-col--message">
            <div className="field field--grow">
              <label htmlFor={id("message")}>お問い合わせ内容</label>
              <textarea id={id("message")} name="message" maxLength={4000} placeholder="お問い合わせ内容をご記入ください" />
            </div>
          </div>
        </div>

        {/* Honeypot: hidden from people, tempting to bots */}
        <div className="hp" aria-hidden="true">
          <label>
            Website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-submit" disabled={sending}>
            {sending ? "送信中" : "送信"}
          </button>
          <p
            className={`form-status${status.state === "error" ? " form-status--error" : ""}`}
            role={status.state === "error" ? "alert" : "status"}
          >
            {status.state === "success" &&
              "送信が完了しました。担当者より折り返しご連絡いたします。"}
            {status.state === "error" && status.message}
          </p>
        </div>
      </form>
    </div>
  );
}
