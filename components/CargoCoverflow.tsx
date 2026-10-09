"use client";

import Image from "next/image";
import { A11y, EffectCoverflow, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

const photos = [
  {
    src: "/images/cargo-terminal.jpg",
    alt: "空港の貨物ターミナルでカートに積まれた荷物",
  },
  {
    src: "/images/cargo-aircraft.jpg",
    alt: "貨物機への積み込み作業",
  },
];

export default function CargoCoverflow() {
  return (
    <div className="cargo-coverflow" role="region" aria-label="航空貨物の写真">
      <Swiper
        modules={[A11y, EffectCoverflow, Keyboard]}
        effect="coverflow"
        centeredSlides
        slidesPerView="auto"
        grabCursor
        keyboard={{ enabled: true }}
        coverflowEffect={{
          rotate: 35,
          stretch: 0,
          depth: 120,
          modifier: 1,
          slideShadows: true,
        }}
        speed={600}
        className="cargo-coverflow__swiper"
      >
        {photos.map((photo) => (
          <SwiperSlide className="cargo-coverflow__slide" key={photo.src}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 800px) 72vw, 28vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
