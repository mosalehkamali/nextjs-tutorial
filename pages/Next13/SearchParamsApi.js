import TopicContent from "@/components/module/TopicContent";
import React from "react";

function SearchParamsApi() {
  return (
    <>
      <TopicContent
        text={
          "برای دریافت کوئری پارامتر ها در api از nextUrl روی req  استفاده میکنیم که یکی از پروپرتی های آن searchParams است که یک آبجکت از کوئری پارامتر ها به ما میدهد"
        }
        link={
          "https://nextjs.org/docs/app/building-your-application/routing/route-handlers#url-query-parameters"
        }
        code={`export function GET(req) {
      const params = req.nextUrl.searchParams;
      const query = params.get("query");
      return Response.json({ query });
    }
    `}
      ></TopicContent>
    </>
  );
}

export default SearchParamsApi;
