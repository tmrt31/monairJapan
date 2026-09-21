import Image from "next/image";
import Link from "next/link";
import ContactBand from "@/components/ContactBand";

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-label="MON AIR JAPAN">
        <Image
          className="hero__img"
          src="/images/hero.jpg"
          alt="モンゴルの草原の上空を飛ぶモンゴル航空の旅客機。背景にモンゴルと日本の国旗"
          width={1428}
          height={606}
          sizes="100vw"
          priority
        />
        <div className="hero__copy">
          <div className="wrap">
            <h1 className="hero__title">日本とモンゴルの架け橋として</h1>
            <p className="hero__sub">航空貨物　／　航空券手配　／　観光ツアー</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="prose">
            <p>
              MON AIR JAPAN株式会社は、2023年にモンゴル国のM-TRIP社の日本支社として設立いたしました。近年のモンゴルにおける経済成長に伴い、日本をはじめとする国際社会との経済・ビジネス交流は年々深まりを見せております。私たちはその架け橋として、「航空貨物」「航空券手配」「観光ツアー」の3つのサービスを展開しております。
            </p>
            <p>
              現在、日本・モンゴル間の物流においては、地理的制約やインフラの課題から輸送コストの高騰や物流の停滞が大きな障壁となっています。弊社はこれらの課題を克服すべく、両国を結ぶ新たな物流ネットワークの構築を推進しております。
            </p>
            <p>
              効率的かつコストを抑えた物流サービスを提供するとともに、ビジネスや文化の交流を支えることで、両国の相互理解と経済発展に貢献してまいります。持続可能な未来に向け、日本とモンゴルの新たなビジネスチャンスを創出し、経済成長に寄与できることを心より願っております。
            </p>
          </div>
          <div className="split__media">
            <Image
              className="media-img"
              src="/images/cargo-illustration.jpg"
              alt="空港ターミナル、航空機、貨物トラックのイラスト"
              width={788}
              height={612}
              sizes="(max-width: 800px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="services-title">
        <div className="wrap">
          <h2 className="section-title" id="services-title">サービス</h2>
          <div className="services">
            <Link href="/tickets-tours#tickets">
              <h3>航空券手配</h3>
              <p>個人・法人・団体のお客様へ、目的とご予算に合わせた最適な航空券をご案内します。</p>
            </Link>
            <Link href="/tickets-tours#tours">
              <h3>観光ツアー</h3>
              <p>モンゴル体感ツアー、訪日日本ツアー、オーダーメイド企画をご用意しています。</p>
            </Link>
            <Link href="/cargo">
              <h3>航空貨物</h3>
              <p>国内輸送から輸出入手続きまで、安全かつ迅速な航空貨物輸送をサポートします。</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-label="協力会社・関連会社">
        <div className="wrap partners">
          <div className="partner">
            <h3>協力会社</h3>
            <div className="partner__logo">
              <Image src="/images/partner-jupiter.png" alt="ジュピター・ジャパン" width={160} height={91} />
            </div>
          </div>
          <div className="partner">
            <h3>関連会社</h3>
            <div className="partner__logo">
              <Image src="/images/partner-kohjitsu.png" alt="コージツ・グループ（KOHJITSU group）" width={588} height={98} />
            </div>
          </div>
          <div className="partner">
            <h3>モンエアツアー</h3>
            <div className="partner__logo">
              <Image src="/images/mtrip.png" alt="M trip" width={556} height={231} />
            </div>
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
