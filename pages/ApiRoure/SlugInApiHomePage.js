import TopicContent from '@/components/module/TopicContent'
import React from 'react'

function SlugInApiHomePage() {
  return (
    <>
     <TopicContent
     text={'برای استفاده در داخل فولدر خود api کافیست دو براکت برایش بگذاریم [[...slug]] اینجوری دیگه فایل ایندکس اجرا نمیشود و فقط فایل slug اجرا میشود'}
     link={"https://nextjs.org/docs/pages/building-your-application/routing/api-routes"}
     ></TopicContent> 
    </>
  )
}

export default SlugInApiHomePage
