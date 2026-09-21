import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

function GlobeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.6 2.6 3.9 5.6 3.9 9s-1.3 6.4-3.9 9c-2.6-2.6-3.9-5.6-3.9-9S9.4 5.6 12 3Z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4 4h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 3.5V14H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      <path opacity=".55" d="M19 8.5h1a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2v2.5L16.5 18H11a2 2 0 0 1-1.9-1.4h6.4a3.5 3.5 0 0 0 3.5-3.5V8.5Z" />
    </svg>
  );
}

export default function Header() {
  return (
    <header>
      <div className="topbar">
        <div className="wrap topbar__inner">
          <Link href="/" className="brand" aria-label="MON AIR JAPAN ホーム">
            <Image src="/images/logo.png" alt="MON AIR JAPAN" width={697} height={158} priority />
          </Link>
          <div className="topbar__tools">
            <span className="lang">
              <GlobeIcon />
              <span>JP</span>
            </span>
            <Link href="/contact" className="inquiry-link">
              <ChatIcon />
              <span>お問い合わせ</span>
            </Link>
          </div>
        </div>
      </div>
      <Nav />
    </header>
  );
}
