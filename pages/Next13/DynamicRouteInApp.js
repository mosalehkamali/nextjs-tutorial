import TopicContent from '@/components/module/TopicContent'
import React from 'react'

function DynamicRouteInApp() {
  return (
    <>
     <TopicContent
     text={'برای ساخت داینامیک روت در app فقط باید فولدر داینامیک بسازیم و در آن فایل page  را ایجاد کنیم در ورودی کامپوننت به params های '}
     link={'https://nextjs.org/docs/app/building-your-application/routing#the-app-router'}
     code={`// app/users/[id]/page.js
     import React from 'react'

     function page({params}) {
       return (
         <h1>
           user ID: {params.id}
         </h1>
       )
     }
     
     export default page
     `}
     ></TopicContent> 
    </>
  )
}

export default DynamicRouteInApp
