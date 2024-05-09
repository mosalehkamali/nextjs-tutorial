import TopicContent from '@/components/module/TopicContent'
import React from 'react'

function craeteMoudlePath() {
  return (
    <>
     <TopicContent
     text={'زمانی که میخواهیم فایلی را ایمپورت کنیم میتوانیم مسیری که فابل باید از آن جا ایمپورت شود را کاستوم کنیم تا خوانایی کد بیشتر شود و راحتی کار هم بیشتر شود. برای این کار باید مسیر مدنظر خود را به شکل زیر در فایل jsconfig.json تغییر بدهیم'}
     link={'https://nextjs.org/docs/app/building-your-application/configuring/absolute-imports-and-module-aliases'}
     code={`// tsconfig.json or jsconfig.json
     {
       "compilerOptions": {
         "baseUrl": "src/",
         "paths": {
           "@/styles/*": ["styles/*"],
           "@/components/*": ["components/*"]
         }
       }
     }`}
     ></TopicContent> 
    </>
  )
}

export default craeteMoudlePath
