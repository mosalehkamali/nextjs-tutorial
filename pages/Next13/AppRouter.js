import TopicContent from '@/components/module/TopicContent'
import React from 'react'

function AppRouter() {
  return (
    <>
     <TopicContent
     text={'در نسخه next 13 قابلیت App Router اضافه شده برای روت بندی پروژه روت ها را در پوشه app بجای پوشه pages میسازیم و باید نام فایل ها بجای index , page  باشد'}
     link={'https://nextjs.org/docs/app/building-your-application/routing#the-app-router'}
     ></TopicContent> 
    </>
  )
}

export default AppRouter
