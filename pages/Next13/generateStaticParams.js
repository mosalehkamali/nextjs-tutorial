import TopicContent from "@/components/module/TopicContent";
import React from "react";

function generateStaticParams() {
  return (
    <>
      <TopicContent
        text={
          "در روت های داینامیک برای اینکه پیجی به صورت ssg از قبل ساخته شود و آماده باشد از متد generateStaticParams  استفاده میکنیم که آرایه از روت هایی که میخواهیم آماده باشند ریترن میکند ."
        }
        link={
          "https://nextjs.org/docs/app/api-reference/functions/generate-static-params"
        }
        code={`//app/blog/[id]/page.js
     // Return a list of 'params' to populate the [id] dynamic segment
     export async function generateStaticParams() {
       const posts = await fetch('https://.../posts').then((res) => res.json())
      
       return posts.map((post) => ({
         id: post.id,
       }))
     }`}
      ></TopicContent>
    </>
  );
}

export default generateStaticParams;
