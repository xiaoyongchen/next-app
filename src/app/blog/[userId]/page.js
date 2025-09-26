'use client'

// 动态路由，通过use解包 http://localhost:3000/blog/123
// 如果一个blog/[id] 又有blog/[userId] 会报错，名字最好相同，因为是形参
import { useState, use } from "react";

export default function Page({ params }) {
  const [count, setCount] = useState(0);
  const resolvedParams = use(params); 
  const { userId } = resolvedParams;
  return (
    <div>
      <h1>userId: {userId}</h1>
      <div onClick={() => setCount(count + 1)}>{ count }</div>
    </div>
  );
}