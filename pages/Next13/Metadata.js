import TopicContent from "@/components/module/TopicContent";
import React from "react";

function Metadata() {
  return (
    <>
      <TopicContent
        text={
          "برای ایجاد تگ های متا برای هر page  باید آبجکتی به نام metadata لیجاد کنیم و در آن برای هر متا مقدار مورد نظر را بنویسیم"
        }
        link={
          "https://nextjs.org/docs/app/building-your-application/optimizing/metadata"
        }
        code={`export const metadata = {
    title: '...',
    description: '...',
  }
   
  export default function Page() {}`}
      ></TopicContent>
    </>
  );
}

export default Metadata;
