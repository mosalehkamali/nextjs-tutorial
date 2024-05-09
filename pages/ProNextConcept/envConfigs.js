import TopicContent from "@/components/module/TopicContent";
import React from "react";

function envConfigs() {
  return (
    <>
      <TopicContent
        text={
          "وریبل های فایل env فقط در سمت سرور در دسترس هستند برای اینکه بتوانیم آن ها را در سمت کلاینت هم داشته باشیم دو راه داریم یکی از طریق فایل next.config.mjs و یا با اضافه کردن NEXT_PUBLIC_ به قبل از اسم وریبل در فایل env"
        }
        link={"https://nextjs.org/docs/pages/api-reference/next-config-js/env"}
        code={`
      //next.config.mls
      module.exports = {
        env: {
          customKey: 'my-value',
        },
      }
      
      //.env

      NEXT_PUBLIC_EXAMPLE = "test"
      
      `}
      ></TopicContent>
    </>
  );
}

export default envConfigs;
