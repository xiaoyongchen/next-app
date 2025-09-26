// pages/shop/[...slug].js
// shop/process1→ { slug: ['process1'] }
// shop/process1/process2 → { slug: ['process1', 'process2'] }
// shop/* 可以是shop/* 或者 shop
import { use } from "react";

export default function ShopPage({ params}) {
  const { slug } = use(params);
 
  return (
    <div>
      <h1>商城</h1>
      <p>当前路径：/shop/{slug?.join('/')}</p>
    </div>
  );
}