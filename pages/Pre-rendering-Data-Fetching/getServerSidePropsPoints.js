import TopicHeader from '@/components/module/TopicHeader'
import React from 'react'
import Link from 'next/link'


function getServerSidePropsPoints() {
  return (
    <>
     <TopicHeader></TopicHeader> 
     <div className='topic-text'>
        
            <p>getServerSideProps در سمت سرور اجرا میشود</p>
            <p>با هر ریکوئست یک بار این تابع فراخوانی میشود</p>
            <p>امنیت تابع بالاست چون تمام کد های تابع در سرور اجرا میشود پس از توکن ها و کوکی ها میتوانیم استفاده کنیم</p>
            <p>در تابع getServerSideProps از کد های nodejs هم میتوانیم استفاده کنیم</p>
            <p>getServerSideProps هم پراپرتی را دریافت میکند که در آن به params  و  request دسترسی داریم</p>
     </div>
     <Link className='topic-link' href="https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering">Next.js document about this topic</Link>
    </>
  )
}

export default getServerSidePropsPoints
