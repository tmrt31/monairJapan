"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/hero.jpg",
    alt: "モンゴルの草原の上空を飛ぶモンゴル航空の旅客機。背景にモンゴルと日本の国旗",
  },
  {
    src: "/images/tour-japan.jpg",
    alt: "日本の観光地を巡る旅の風景",
  },
];

export default function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (hovered || focused || prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(interval);
  }, [focused, hovered, prefersReducedMotion]);

  const showSlide = (index: number) => {
    setActiveSlide((index + slides.length) % slides.length);
  };

  return (
    <section
      className="hero"
      aria-label="MON AIR JAPAN"
      aria-roledescription="カルーセル"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <div className="hero__image-frame">
        {slides.map((slide, index) => (
          <div
            className={`hero__slide${index === activeSlide ? " hero__slide--active" : ""}`}
            key={slide.src}
            role="group"
            aria-roledescription="スライド"
            aria-label={`${index + 1} / ${slides.length}`}
            aria-hidden={index !== activeSlide}
          >
            <Image
              className="hero__img"
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
      <button
        className="hero__nav hero__nav--previous"
        type="button"
        onClick={() => showSlide(activeSlide - 1)}
        aria-label="前のスライド"
      >
        ‹
      </button>
      <button
        className="hero__nav hero__nav--next"
        type="button"
        onClick={() => showSlide(activeSlide + 1)}
        aria-label="次のスライド"
      >
        ›
      </button>
      <div className="hero__copy">
        <div className="wrap hero__inner">
          <div>
            <h1 className="hero__title">日本とモンゴルの架け橋として</h1>
            <p className="hero__sub">航空貨物　／　航空券手配　／　観光ツアー</p>
          </div>
          <div className="hero__controls" aria-label="スライド操作">
            <div className="hero__dots" aria-label="スライドを選択">
              {slides.map((slide, index) => (
                <button
                  className="hero__dot"
                  key={slide.src}
                  type="button"
                  onClick={() => showSlide(index)}
                  aria-label={`${index + 1}枚目のスライド`}
                  aria-current={index === activeSlide ? "true" : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
