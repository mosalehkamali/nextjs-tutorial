import TopicContent from '@/components/module/TopicContent'
import React from 'react'

function ClientComponentProps() {
  return (
    <>
     <TopicContent
     text={'وقتی پراپی به کامپوننت ارسال میکنیم آن پراپ در جی اس لود استاتیک ذخیره میشوند پس بهتر است که پراپ را به صورت دقیق و کم حجم ذخیره کنیم که  پرفورمنس سایت پایین نیاید'}
     link={'https://nextjs.org/learn/react-foundations/displaying-data-with-props'}
     ></TopicContent> 
    </>
  )
}

export default ClientComponentProps
