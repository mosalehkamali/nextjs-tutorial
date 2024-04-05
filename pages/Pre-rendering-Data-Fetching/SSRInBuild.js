import TopicHeader from '@/components/module/TopicHeader'
import Link from 'next/link'
import React from 'react'

function SSRInBuild() {
  return (
    <>
    <TopicHeader></TopicHeader> 
    <p className='topic-text'>
    صفحات SSR در زمان ران تایم ساخته میشوند  و در زمان بیلد تایم اتفاقی برایشان نمی افتد با هر ریکوئست در زمان ران تایم یک صفحه SSR جدید ساخته و برای کاربر فرستاده میشود
    </p>
    <Link className='topic-link' href="https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering">Next.js document about this topic</Link>
      
    </>
  )
}

export default SSRInBuild
