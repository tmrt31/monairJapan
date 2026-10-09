"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="navbar" aria-label="メインメニュー">
      <div className="navbar__inner">
        <button
          className="navbar__toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="navbar__toggle-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>{isOpen ? "閉じる" : "メニュー"}</span>
        </button>
        <ul
          className={`navbar__list${isOpen ? " navbar__list--open" : ""}`}
          id="primary-navigation"
        >
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
