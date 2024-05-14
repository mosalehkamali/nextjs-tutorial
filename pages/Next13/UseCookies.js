import TopicContent from '@/components/module/TopicContent'
import React from 'react'

function UseCookies() {
  return (
    <>
     <TopicContent
     text={'به روش زیر میتوان api برای ست یا دریافت کوکی ساخت'}
     link={'https://nextjs.org/docs/app/building-your-application/routing/route-handlers#cookies'}
     code={`
     export async function POST(req){
         const reqBody = await req.json()
         const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
     
         return Response.json(reqBody,{
             status:201,
             headers:{'Set-Cookie':'token:{token}'}
         }
         )
     }
     
     export async function GET(req){
         const token = request.cookies.get('token')
         return Response.json({token})
     }`}
     ></TopicContent> 
    </>
  )
}

export default UseCookies
