import TopicContent from '@/components/module/TopicContent'
import React from 'react'

function StreamingServerRendering() {
  return (
    <>
     <TopicContent
     text={'زمانی که دو کامپوننت چایلد در یک کامپوننت والد دارای عملیات ایسنک باشند نکست آن ها را به نوبت انجام نمیدهد بلکه آن ها را همزمان اجرا میکند و هرکدام که زودتر پایان یافت آن کامپوننت را رندر میکند به این کار استریمینگ میگویند'}
     link={'https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming'}
     ></TopicContent> 
    </>
  )
}

export default StreamingServerRendering
