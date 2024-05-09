import TopicContent from '@/components/module/TopicContent'
import React from 'react'

function RedirectDefault() {
  return (
    <>
     <TopicContent
     text={"اگر بخواهیم یک صفحه را ریدایرکت کنیم که کاربر به محز ورود وارد صفحه دیگری بشود به شکل زیر در فایل next.config.mjs انجام دهیم"}
     link={"https://nextjs.org/docs/pages/api-reference/next-config-js"}
     code={`/** @type {import('next').NextConfig} */
     const nextConfig = {
       reactStrictMode: true,
       async redirects() {
         return [
           {
             source:"/ProNextConcept",//روتی که باید ریدایرکت شود
             destination:"/",//روتی که به آن ریدایرکت میشود 
             permanent:false //نشان میدهد که آیا این تغییر دائمی است یا موقت
           }
         ];
       },
     };
     
     export default nextConfig;
     `}
     >
     </TopicContent> 
    </>
  )
}

export default RedirectDefault
