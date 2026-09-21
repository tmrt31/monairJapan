import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  const tokyo = site.offices.find((o) => o.label === "東京") ?? site.offices[0];
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image src="/images/logo-mark.png" alt="MON AIR JAPAN" width={128} height={108} />
            <address>
              {tokyo.zip}
              <br />
              {tokyo.address}
              <br />
              TEL：<a href={`tel:${site.telHref}`}>{site.tel}</a>
              <br />
              FAX：{site.fax}
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </address>
          </div>
          <ul className="footer-nav">
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/cargo">航空貨物</Link></li>
            <li><Link href="/tickets-tours">航空券＆ツアー</Link></li>
            <li><Link href="/contact">お問い合わせ</Link></li>
            <li>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
          </ul>
        </div>
        <p className="copyright">© {new Date().getFullYear()} {site.nameEn}</p>
      </div>
    </footer>
  );
}
