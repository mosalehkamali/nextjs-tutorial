import TopicContent from "@/components/module/TopicContent";
import React from "react";

function backEndInNext13() {
  return (
    <>
      <TopicContent
        text={
          "برای ساخت api در نکست 13 باید اسم  فایل در فولدر api  route.js  باشد و در این فایل فانکشن هایی با نام های متد های فچ اکسپورت بشوند و برای فرستادن رسپانس باید Response.json() را ریترن کنیم ."
        }
        link={
          "https://nextjs.org/docs/app/building-your-application/routing/route-handlers"
        }
        code={`// app/api/route.js
     export function GET() {
        return Response.json({ message: "GET api ..." });
      }
      
      export function POST() {
        return Response.json({ message: "POST api ..." });
      }
      
      export function PUT() {
        return Response.json({ message: "PUT api ..." });
      }
      
      export function DELETE() {
        return Response.json({ message: "DELETE api ..." });
      }
      `}
      ></TopicContent>
    </>
  );
}

export default backEndInNext13;
