import TopicContent from '@/components/module/TopicContent'
import React from 'react'

function SlugInAppRouter() {
  return (
    <>
     <TopicContent
     text={"برای ایجاد slug در app  یک فولدر slug میسازیم و در آن یک فابل با نام  page  ایجاد میکنیم . ما در props  های کامپوننت به params  ها و query دسترسی داریم "}
     link={'https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments'}
     code={`// app/[...search]/page.js
     import React from 'react'

     function page({params , searchParams}) {
       return (
         <h1>
           user searched : {searchParams.q} = {params.search[1]} , {params.search[2]},{params.search[3]} 
         </h1>
       )
     }
     
     export default page
     `}
     ></TopicContent> 
    </>
  )
}

export default SlugInAppRouter
