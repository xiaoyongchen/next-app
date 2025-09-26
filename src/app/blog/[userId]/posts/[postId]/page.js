'use client'

// 动态路由，通过use解包 http://localhost:3000/blog/userId-123/posts/postId-456
import { useState, use } from "react";

export default function Page({ params }) {
  const [count, setCount] = useState(0);
  const resolvedParams = use(params); 
  const { userId, postId } = resolvedParams;
  return (
    <div>
      <h1>userId: {userId}, postId: {postId}</h1>
      <div onClick={() => setCount(count + 1)}>{ count }</div>
    </div>
  );
}