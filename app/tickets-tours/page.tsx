import type { Metadata } from "next";
import Image from "next/image";
import ContactBand from "@/components/ContactBand";

export const metadata: Metadata = {
  title: "航空券＆ツアー",
  description:
    "MIATモンゴル航空をはじめとする広範なネットワークで、個人・法人・団体の航空券手配と、モンゴル・日本のツアー企画を一気通貫でお手配します。",
};

export default function TicketsToursPage() {
  return (
    <>
      <div className="page-head">
        <div className="wrap">
          <h1 className="page-title">航空券＆ツアー</h1>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="split split--center">
            <div className="prose">
              <p>
                モンエアジャパンは、MIATのモンゴル航空をはじめとする広範なネットワークを活用し、快適でスムーズなご渡航をサポートいたします。お一人ひとりの目的やご予算に合わせた最適な航空券の手配から、魅惑あふれる両国の魅力を体験できるツアー企画まで、旅のすべてを一気通貫でお手配いたします。
              </p>
            </div>
            <div className="split__media">
              <Image
                className="media-img"
                src="/images/tickets-illustration.jpg"
                alt="航空券、スーツケース、日本の街並みのイラスト"
                width={593}
                height={460}
                sizes="(max-width: 800px) 100vw, 40vw"
              />
            </div>
          </div>

          <div className="service-block" id="tickets">
            <div className="split split--reverse split--center">
              <div className="split__media">
                <Image
                  className="media-img"
                  src="/images/boarding-pass.png"
                  alt="東京（TYO）からウランバートル（ULN）行きの搭乗券のイメージ"
                  width={485}
                  height={275}
                  sizes="(max-width: 800px) 100vw, 40vw"
                />
              </div>
              <div>
                <h2>【1】航空券手配サービス（個人・法人・団体）</h2>
                <ul className="points">
                  <li>
                    <strong>最適なルートをご案内：</strong>
                    モンゴル直行便はもちろん、世界各国からの経由便まで、スケジュールとご予算に合わせたベストな航空券を迅速に手配します。
                  </li>
                  <li>
                    <strong>柔軟な手配力：</strong>
                    観光でのご利用はもちろん、急なビジネス出張や大人数の団体渡航まで、幅広くリーズナブルな価格でご提供します。
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="service-block" id="tours">
            <div className="split split--center">
              <div>
                <h2>【2】モンゴル＆日本ツアーサービス</h2>
                <ul className="points">
                  <li>
                    <strong>モンゴル体感ツアー：</strong>
                    大自然を巡る乗馬体験、伝統住居「ゲル」での宿泊、輝く星空鑑賞など、モンゴルならではの特別な体験をご提案します。
                  </li>
                  <li>
                    <strong>訪日日本ツアー：</strong>
                    モンゴルから日本への観光客やビジネス視察団向けに、魅力的な日本の名所巡りや文化体験プログラムをご用意しています。
                  </li>
                  <li>
                    <strong>オーダーメイド企画：</strong>
                    個人旅行から企業の社員旅行、視察ツアーまで、ご要望に合わせたオリジナルの旅行プランを作成いたします。
                  </li>
                </ul>
              </div>
              <div className="split__media">
                <Image
                  className="media-img"
                  src="/images/tour-japan.jpg"
                  alt="富士山と五重塔を背景に、ガイドの案内を受ける家族連れの旅行者"
                  width={479}
                  height={319}
                  sizes="(max-width: 800px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
