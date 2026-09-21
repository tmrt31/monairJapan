import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "航空券・航空貨物・ツアーに関するご相談は、お問い合わせフォームまたはお電話・メールでお気軽にご連絡ください。",
};

export default function ContactPage() {
  return (
    <>
      <div className="page-head">
        <div className="wrap">
          <h1 className="page-title">お問い合わせ</h1>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <dl className="info-list">
            <dt>所在地</dt>
            <dd>
              {site.offices.map((o) => (
                <div key={o.label}>
                  {o.zip}　{o.address}
                </div>
              ))}
            </dd>
            <dt>営業時間</dt>
            <dd>{site.hours}</dd>
            <dt>TEL</dt>
            <dd><a href={`tel:${site.telHref}`}>{site.tel}</a></dd>
            <dt>FAX</dt>
            <dd>{site.fax}</dd>
            <dt>WEB</dt>
            <dd><a href={`mailto:${site.email}`}>{site.email}</a></dd>
            <dt>FACEBOOK</dt>
            <dd>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer">
                facebook.com/MonAirJapanPAGE
              </a>
            </dd>
          </dl>
        </div>
      </section>

      <section className="contact-band" id="contact" aria-label="お問い合わせフォーム">
        <div className="wrap">
          <ContactForm heading="お問い合わせ：" />
        </div>
      </section>
    </>
  );
}
