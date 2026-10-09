"use client";

import Image from "next/image";
import { A11y, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const news = [
  {
    date: "2026-10-01",
    category: "旅行情報",
    title: "モンゴル旅行を計画する際の準備ポイント",
    summary: "旅程や季節に合わせた持ち物、移動手段など、出発前に確認したい基本情報をご紹介します。",
    image: "/images/tour-japan.jpg",
    imageAlt: "日本の観光地を巡る旅行の風景",
  },
  {
    date: "2026-09-15",
    category: "航空貨物",
    title: "モンゴル向け貨物の発送前チェック",
    summary: "お荷物の内容やサイズ、必要書類を事前に整理しておくことで、スムーズな輸送手配につながります。",
    image: "/images/cargo-terminal.jpg",
    imageAlt: "空港の貨物ターミナルに集められた荷物",
  },
  {
    date: "2026-08-30",
    category: "お知らせ",
    title: "モンゴル旅行・航空貨物のご相談を承っています",
    summary: "航空券やツアーの手配、日本・モンゴル間の貨物輸送についてお気軽にお問い合わせください。",
    image: "/images/cargo-aircraft.jpg",
    imageAlt: "航空機への貨物積み込み作業",
  },
];

export default function NewsCarousel() {
  return (
    <Swiper
      className="news-carousel"
      modules={[A11y, Keyboard, Pagination]}
      slidesPerView={1}
      spaceBetween={18}
      breakpoints={{
        801: { slidesPerView: 3 },
      }}
      keyboard={{ enabled: true }}
      pagination={{
        clickable: true,
        renderBullet: (index, className) =>
          `<button class="${className}" type="button" aria-label="${index + 1}件目のお知らせ"></button>`,
      }}
      watchOverflow
    >
      {news.map((item) => (
        <SwiperSlide key={item.date}>
          <article className="news-card">
            <div className="news-card__image">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 800px) 100vw, 33vw"
              />
            </div>
            <div className="news-card__meta">
              <time dateTime={item.date}>{item.date.replaceAll("-", ".")}</time>
              <span>{item.category}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
