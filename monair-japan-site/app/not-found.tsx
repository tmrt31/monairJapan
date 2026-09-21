import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap notfound">
      <h1>ページが見つかりません</h1>
      <p>お探しのページは移動または削除された可能性があります。</p>
      <Link href="/" className="btn-link">ホームへ戻る</Link>
    </div>
  );
}
