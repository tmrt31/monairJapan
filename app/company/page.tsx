import type { Metadata } from "next";
import { companyProfile, history } from "@/lib/site";

export const metadata: Metadata = {
  title: "企業概要",
  description:
    "モン・エア・ジャパン株式会社（MON AIR JAPAN CO., LTD.）の会社概要。所在地、設立、資本金、事業内容、沿革。",
};

export default function CompanyPage() {
  const entries = history.filter((h) => h.text.trim() !== "");

  return (
    <>
      <div className="page-head">
        <div className="wrap">
          <h1 className="page-title">企業概要</h1>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <dl className="profile">
            {companyProfile.map(({ term, desc }) => (
              <div key={term} style={{ display: "contents" }}>
                <dt>{term}</dt>
                <dd>
                  {desc.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {entries.length > 0 && (
        <section className="section section--tint" aria-labelledby="history-title">
          <div className="wrap">
            <h2 className="section-title" id="history-title">沿革　/　HISTORY</h2>
            <ul className="history">
              {entries.map((h) => (
                <li key={h.year}>
                  <span className="year">{h.year}</span>
                  <span>{h.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
