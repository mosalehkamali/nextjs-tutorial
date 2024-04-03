import React from 'react'
import TopicHeader from '@/components/module/TopicHeader'
import Link from 'next/link'

function ISRConcept() {
  return (
    <>
     <TopicHeader></TopicHeader> 
     <p className='topic-text'>
یکی از معایب صفحات SSG این است که بعد از بیلد تایم اگر اطلاعات صفحه تغییر کند صفحه ساخته شده تغییر نمیکند ISR یکیاز قابلیت های است که میتوانیم به صفحه SSG بدهیم تا ان صفحه بتوانند ری جنریت بشود
     </p>
     <Link className='topic-link' href="https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation">Next.js document about this topic</Link>
    </>
  )
}

export default ISRConcept
