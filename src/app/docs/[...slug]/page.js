// pages/docs/[...slug].js
// docs/process1→ { slug: ['process1'] }
// docs/process1/process2 → { slug: ['process1', 'process2'] }
// docs/* 必须要有docs/
import { use } from "react";

export default function DocsPage({ params}) {
  const { slug } = use(params);
 
  return (
    <div>
      <h1>文档</h1>
      <p>当前路径：/docs/{slug?.join('/')}</p>
    </div>
  );
}