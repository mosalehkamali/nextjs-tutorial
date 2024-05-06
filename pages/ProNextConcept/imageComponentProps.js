import TopicContent from '@/components/module/TopicContent'
import React from 'react'

function imageComponentProps() {
  return (
    <>
    <TopicContent
    text={'🌟 نکات حرفه ای تر از پراپ های کامپوننت Image 🌟'}
    list={[
        "پرارپ های width و heigth در کامپوننت ایمیج رزولوشن عکس را مشخص میکنند",
        "پراپ qualiy ورودی نامبر بین 1 تا 100 میگیرد که درصد کیفیت عکس را مشخص میکند ",
        "پراپ priority ورودی بولین میگیرد و دیفالت آن false است و ما اگر آن را برابر true قرار بدیم lazy loading را لغو میکن و عکس را در اولویت دانلود قرار میدهد."
    ]}
    link={'https://nextjs.org/docs/pages/api-reference/components/image#props'}
    ></TopicContent>
    </>
  )
}

export default imageComponentProps
