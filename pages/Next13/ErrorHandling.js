import TopicContent from "@/components/module/TopicContent";
import React from "react";

function ErrorHandling() {
  return (
    <>
      <TopicContent
        text={
          "برای هندل کردن ارور ها در روت ها از کامپوننت error.js استفاده میکنیم که  یک کلاینت کامپوننت است در آن به دو ورودی دسترسب داریم یکی error که در آن به مسیج ارور دسترسی داریم و دیگری reset که متدی است که قسمتی که با ارور مواجه بود را ری ترای میکند. برای هندل کردن کل ارور های اپلیکیشن باید در روت اصلی پروژه فایل global-error.js  را بسازیم تا حتی ارور های app/layout  را هم هندل کنیم البته در نظر داشته باشید که این فایل فقط در مرحله پروداکشن یعنی بعد از build  اجرا میشود"
        }
        link={
          "https://nextjs.org/docs/app/building-your-application/routing/error-handling"
        }
        code={`'use client'
 
    export default function GlobalError({ error, reset }) {
      return (
        <html>
          <body>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>Try again</button>
          </body>
        </html>
      )
    }`}
      ></TopicContent>
    </>
  );
}

export default ErrorHandling;
