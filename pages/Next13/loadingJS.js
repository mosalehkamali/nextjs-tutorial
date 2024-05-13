import TopicContent from "@/components/module/TopicContent";
import React from "react";

function loadingJS() {
  return (
    <>
      <TopicContent
        text={
          "برای نمایش یک لودینگ تا زمانی که صفحه لود شود میتوانیم یک فایل به نام loading.js ایجاد کنیم و در  آن کامپوننت لودینگ را قرار بدهیم نکست جی اس این کامپوننت را به عنوان fallback برایSuspense قرار میدهد. باید توجه داشته باشید که loading  به دور تا دور page فالبک میشود نه دور layout یعنی برای فایل های layout همسطح خودش اجرا نمیشود"
        }
        link={
          "https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming"
        }
      ></TopicContent>
    </>
  );
}

export default loadingJS;
