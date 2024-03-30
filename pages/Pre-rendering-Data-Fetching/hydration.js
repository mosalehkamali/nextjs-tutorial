import React from 'react'
import TopicHeader from '@/components/module/TopicHeader'
import Link from 'next/link'

function hydration() {

  return (
    <>
      <TopicHeader></TopicHeader>
      <div className="topic-container">
        <p className='topic-text'>
          در ری اکت زمانی که ریکوئست به سرور فرستاده میشود ری اکت یک فایل  HTML خالی برای کلاینت ارسال میکند و اچ تی ام ال تمپلیت و کد های جی اس بعد از  JS load ایجاد میشوند اما در نکست سرور اچ تی م ال تمپلیت را به صورت استاتیک برای کلاینت ارسال میکند و فقط کد های جی اسی بعد از JS load فعال میشوند به این عمل hydration میگویند
        </p>
        <Link className='topic-link' href="https://nextjs.org/docs/messages/react-hydration-error">Next.js document about this topic</Link>
      </div>
    </>
  )
}

export default hydration
