import TopicContent from '@/components/module/TopicContent'
import React from 'react'

function requestBody() {
  return (
    <>
     <TopicContent
     text={'برای دسترسی به ریکوئست بادی در api ruote باید req  که در ورودی در فانکشن گرفته شده با متد جیسون اطلاعاتش را دریافت کرد که پرامیس برمیگرداند '}
     link={
        "https://nextjs.org/docs/app/building-your-application/routing/route-handlers"
      }
      code={`export async function POST(req) {
        const reqBody = await req.json();
        return Response.json(reqBody);
      }`}
     ></TopicContent> 
    </>
  )
}

export default requestBody
