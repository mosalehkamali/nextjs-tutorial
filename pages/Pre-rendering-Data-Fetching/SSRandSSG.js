import React from 'react'
import TopicHeader from '@/components/module/TopicHeader'
import Link from 'next/link'
function SSRandSSG() {
  return (
    <>
     <TopicHeader></TopicHeader> 
     <div className="topic-container">
        <p className='topic-text'>
        Static Site Generation : SSG 
        <br></br>
        جنریت صفحه های ثابت برای همه کاربران در سمت سرور SSG است
        <br></br>
        <Link className='topic-link' href="https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation">Next.js document about this topic</Link>
        <br></br>
        Server-side Rendering : SSR
        <br></br>
        رندر صفحه در سمت سرور، پس از  گرفتن درخواست از طرف کلایت و ساخت صفحه های داینامیک با استفاده از دیتا بیس برای کاربران مختلف SSR است
        <br></br>
        <Link className='topic-link' href="https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering">Next.js document about this topic</Link>
        </p>
        </div>
    </>
  )
}

export default SSRandSSG
