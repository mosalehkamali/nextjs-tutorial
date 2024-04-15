import TopicContent from '@/components/module/TopicContent'
import React from 'react'

function SlugInApi() {
  return (
    <>
     <TopicContent
     text={'وقتی که کوئری های زیادی در api به بک اند فرستاده میشود منطقی است  که ما یک روت slug بسازیم به این صورت که یک فایل js.[...slug] میسازیمو در آن ما با پراپرتی req.query به تمام روت ارسال شده کاربر دسترسی داریم و با توجه به آن میتوانیم داده مورد نظر کاربر را ارسال کنیم. '}
     link={"https://nextjs.org/docs/pages/building-your-application/routing/api-routes"}
     ></TopicContent> 
    </>
  )
}

export default SlugInApi
