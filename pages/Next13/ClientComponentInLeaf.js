import TopicContent from "@/components/module/TopicContent";
import React from "react";

function ClientComponentInLeaf() {
  return (
    <>
      <TopicContent
       text={"برای استفاده از از لاجیک های کلاینت کامپوننت در یک سرور کامپوننت بهتر از است برای همان قسمت ها  یک کامپوننت جدا بنویسیم و آن ها را در سرور کامپوننت ایمپورت کنیم و برای آن لاجیک ها آن سرور کامپوننت را به کلاینت کامپوننت تبدیل نکنیم واز کلاینت کامپوننت های برگ در آن استفاده کنیم."}
       link={"https://nextjs.org/docs/pages/building-your-application/routing"}
      ></TopicContent>
    </>
  );
}

export default ClientComponentInLeaf;
