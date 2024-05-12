import TopicContent from '@/components/module/TopicContent'
import React from 'react'

function NestedComponent() {
  return (
    <>
      <TopicContent
      text={'اگر  از یک سرور کامپوننت در یک کلاینت کامپوننت استفاده کنیم تمام آن کامپوننت و دپندنسی های آن به کلاینت فرستاده میشوند میشوند و این پرفورمنس سایت را کاهش میدهد ولی اگر یک کلاینت کامپوننت را در سرور کامپوننت ایمپورت کنیم فقط جی اس باندل برای همان کلاینت کامپوننت ارسال میشود و این آسیبی به پرفورمنس سایت نمیزند .'}
      link={'https://nextjs.org/docs/app/building-your-application/caching#fetch-optionsnextrevalidate'}
      ></TopicContent>
    </>
  )
}

export default NestedComponent
