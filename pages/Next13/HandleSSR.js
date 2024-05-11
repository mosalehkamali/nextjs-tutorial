import TopicContent from "@/components/module/TopicContent";
import React from "react";

function HandleSSR() {
  return (
    <>
      <TopicContent
        text={
          'برای ساخت کامپوننت ssr در app router کافی است که در ورودی دوم fetch , cache را برابر با مقدار استرینگی "no-store" قرار بدهیم با این کار دیگر صفحه آماده ساخته نمیشود و با هر ریکوئست یک بار عمل fetch  انجام میشود.'
        }
        link={"https://nextjs.org/docs/app/building-your-application/caching"}
        code={` const res =  await fetch("https://jsonplaceholder.typicode.com/users",{cache:"no-store"})
    const users= await res.json()`}
      ></TopicContent>
    </>
  );
}

export default HandleSSR;
