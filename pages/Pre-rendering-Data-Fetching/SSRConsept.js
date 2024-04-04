import TopicHeader from '@/components/module/TopicHeader'
import React from 'react'
import Link from 'next/link'

function SSRConsept() {
  return (
    <>
     <TopicHeader></TopicHeader> 
     <p className='topic-text'>
        SSR مخفف server side renderingاست و عملکردش به این صورت است که صفحه از پیش در سرور ساخته و آماده نیست بلکه زمانی که ریکوئست به سمت سرور فرستاده میشود همان لحظه صفحه در سرور ساخته میشود و به مرورگر کاربر ارسال میشود . SSR در زمان run time ساخته میشود و در سرور ذخیره نمیشود.
     </p>
     <Link className='topic-link' href="https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering">Next.js document about this topic</Link>
    </>
  )
}

export default SSRConsept
