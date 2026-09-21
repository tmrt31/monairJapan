import type { Metadata } from "next";
import Image from "next/image";
import ContactBand from "@/components/ContactBand";

export const metadata: Metadata = {
  title: "航空貨物",
  description:
    "日本・モンゴル間の航空貨物輸送。生鮮食品、精密機械、医療機器、医薬品から緊急貨物まで、輸出入手続きを含め一気通貫でサポートします。",
};

export default function CargoPage() {
  return (
    <>
      <div className="page-head">
        <div className="wrap">
          <h1 className="page-title">航空貨物</h1>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="split">
            <div className="prose">
              <p>
                近年の国際情勢の変化により、陸路・海路における通過国の制限や輸送期間の長期化が世界的な課題となっています。特に日本・モンゴル間においては、生鮮食品や精密機械、医療機器、医薬品など、厳格な温度管理や高度な安全性が求められるお荷物、そして緊急を要する貨物のスムーズな輸送が極めて重要です。弊社では、お客様や企業様の多様なニーズに応え、国内輸送から複雑な輸出入手続きまでを一気通貫でサポート。安全かつ迅速な航空貨物輸送サービスを提供しております。
              </p>
              <p>
                また、コージツ・グループをはじめとする提携機関との強固なネットワークを活用し、空・海・陸を組み合わせた最適な複合輸送プランをご提案いたします。これにより、スピードとコストパフォーマンスを両立した柔軟な輸送手配が可能です。個人・法人を問わず、物流に関するご相談やご要望がございましたら、どうぞお気軽にお問い合わせください。
              </p>
            </div>
            <div className="split__media">
              <div className="thumbs">
                <Image
                  src="/images/cargo-terminal.png"
                  alt="空港の貨物ターミナルでカートに積まれた荷物"
                  width={187}
                  height={125}
                />
                <Image
                  src="/images/cargo-aircraft.png"
                  alt="貨物機への積み込み作業"
                  width={136}
                  height={92}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="network-title">
        <div className="wrap">
          <h2 className="section-title" id="network-title">
            空・海・陸の多様な輸送オプションを組み合わせた
            <br />
            柔軟な物流ネットワーク
          </h2>
          <div className="prose">
            <p>
              モンゴルへの陸海輸送で長年の経験を持つコージツと、当社の空輸サービスを組み合わせることで、双方の強みを生かした物流ネットワークを構築します。お客様や商品の特性に合わせた柔軟な物流ソリューションを提案・実行し、コスト削減や新たなビジネスチャンスの創出を支援いたします。
            </p>
          </div>
          <figure className="figure figure--wide">
            <Image
              className="media-img media-img--frame"
              src="/images/logistics-network.png"
              alt="コージツ・グループとMON AIR JAPANが連携し、日本側・モンゴル側の輸出入を空・海・陸で結ぶ物流ネットワークの図"
              width={1647}
              height={697}
              sizes="(max-width: 1120px) 100vw, 1056px"
            />
          </figure>
        </div>
      </section>

      <section className="section" aria-label="当社の強み">
        <div className="wrap">
          <figure className="figure">
            <Image
              className="media-img"
              src="/images/strengths.png"
              alt="物流の新たな可能性を実現する当社の強み：コスト削減を実現／柔軟な物流サービス／安心の品質管理／強力なネットワーク／課題解決型のアプローチ／成長を支える物流基盤"
              width={932}
              height={622}
              sizes="(max-width: 1120px) 100vw, 1056px"
            />
          </figure>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
