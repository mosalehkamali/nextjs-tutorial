import React from 'react'
import TopicHeader from '@/components/module/TopicHeader'
import Link from 'next/link'

function SSGBuilding() {
  return (
    <>
      <TopicHeader></TopicHeader>
            <p className='topic-text'> 
            صفحات SSG در زمان build time ساخته میشوند وقتی ینی وقتی نسخه بیلد پروژه رو میگیریم همان لحظه همهصفحات SSG در سرور ساخته میشوند و هر وقت هر کاربری ریکوئست ارسال کند همان صفحات برایش ارسال میشود
            </p>
            <Link className='topic-link' href="https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation">Next.js document about this topic</Link>
            
    </>
  )
}

export default SSGBuilding
