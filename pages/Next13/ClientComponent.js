import TopicContent from '@/components/module/TopicContent'
import React from 'react'

function ClientComponent() {
  return (
    <>
     <TopicContent
     text={'کلاینت کامپوننت هم مثل سرور کامپوننت در سمت سرور رندر میشود اما تفاوتش این است که یک js باندل هم همراه فایل html  به سمت کلاینت ارسال میکند که درآن میتوان از متد های دام و فرانت استفاده کرد . تفاوت کلاینت کامپوننت با سرور کامپوننت این است که سرور کامپوننت در سمت سرور کامل ساخته میشود و به صورت استاتیک به کلاینت ارسال میشود ولی کلاینت کامپوننت در سمت کلانت هم با آن ها کار داریم. برای ساخت کلاینت کامپوننت بالای کامپوننت عبارت استرینگی "use client" را مینویسیم'}
     link={'https://nextjs.org/docs/app/building-your-application/rendering/client-components'}
     code={`'use client'

     import React, { useState } from "react";
     
     function page() {
       const [count,setCount]=useState(0)
       
       const addCounter=()=>{
         setCount(count+1)
       }
       const minusCounter=()=>{
         setCount(count-1)
       }
     
       return (
         <>
       <div>all users page</div>
       <h1>counter {count}</h1>
       <button onClick={addCounter}>add counter</button>
       <button onClick={minusCounter}>minus counter</button>
         </>
     );
     }
     
     export default page;
     `}
     ></TopicContent> 
    </>
  )
}

export default ClientComponent
