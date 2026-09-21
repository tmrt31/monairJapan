export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.monairjapan.co.jp"
).replace(/\/$/, "");

export const site = {
  name: "モン・エア・ジャパン株式会社",
  nameEn: "MON AIR JAPAN CO., LTD.",
  nameShort: "MON AIR JAPAN",
  description:
    "MON AIR JAPAN株式会社は、モンゴルM-TRIP社の日本支社として、航空貨物・航空券手配・観光ツアーで日本とモンゴルをつなぎます。",
  email: "info@monairjapan.co.jp",
  tel: "+81-03-6284-2913",
  telHref: "+810362842913",
  fax: "+81-03-6284-2914",
  facebook: "https://www.facebook.com/MonAirJapanPAGE",
  hours: "月曜日～金曜日 09:00‐17:00（土、日、祝日休業）",
  offices: [
    {
      label: "大阪",
      zip: "〒597-0093",
      address: "大阪府貝塚市二色中町3番地9",
    },
    {
      label: "東京",
      zip: "〒110-0016",
      address: "東京都台東区台東1丁目24-12 グランジュール秋葉原1F",
    },
  ],
} as const;

export const nav = [
  { href: "/", label: "ホーム" },
  { href: "/tickets-tours", label: "航空券＆ツアー" },
  { href: "/cargo", label: "航空貨物" },
  { href: "/company", label: "企業概要" },
] as const;

export const inquirySubjects = ["航空券", "航空貨物", "ツアー", "その他"] as const;

export const companyProfile = [
  { term: "社名", desc: ["モン・エア・ジャパン株式会社"] },
  { term: "英文社名", desc: ["MON AIR JAPAN CO., LTD."] },
  {
    term: "所在地",
    desc: [
      "〒597-0093　大阪府貝塚市二色中町3番地9",
      "〒110-0016　東京都台東区台東1丁目24-12　グランジュール秋葉原1F",
    ],
  },
  { term: "設立", desc: ["令和5年7月18日"] },
  { term: "資本金", desc: ["10,250,000円（2026年10月時点）"] },
  { term: "社員数", desc: ["6名（2026年10月末現在）"] },
  { term: "代表者", desc: ["別府直樹"] },
  { term: "主要取引銀行", desc: ["関西みらい銀行", "紀陽銀行"] },
  {
    term: "事業内容",
    desc: ["1. 航空運送事業", "2. 航空券の販売", "3. 観光および旅行業"],
  },
];

/** Entries with an empty `text` are not rendered. Fill in 2024–2026 when ready. */
export const history: { year: string; text: string }[] = [
  { year: "2023", text: "モンゴル国M-TRIP社の日本支社として設立（7月18日）" },
  { year: "2024", text: "" },
  { year: "2025", text: "" },
  { year: "2026", text: "" },
];
