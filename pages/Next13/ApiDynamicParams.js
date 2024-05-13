import TopicContent from "@/components/module/TopicContent";
import React from "react";

function ApiDynamicParams() {
  return (
    <>
      <TopicContent
        text={
          "برای ساخت api داینامیک باید فایل route.js را در یک فولدر داینامیک میسازیم و در ورودی دوم params را دریافت میکنیم"
        }
        link={
          "https://nextjs.org/docs/app/building-your-application/routing/route-handlers"
        }
        code={`export function GET(req, { params }) {
            return Response.json({ message: 'data for user with ID : {params.id}' });
          }`}
      ></TopicContent>
    </>
  );
}

export default ApiDynamicParams;
