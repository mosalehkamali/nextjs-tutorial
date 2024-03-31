import React from 'react'
import TopicHeader from '@/components/module/TopicHeader'
import Link from 'next/link'

function DataFetchingInNextjs() {
  return (
    <>
      <TopicHeader></TopicHeader>
      <p className='topic-text'>
      در ری اکت  data fetching در هوک useEffecte انجام میشود و چون  کدها داخل جی اس لود تحویل مرورگر داده میشود پس دیتا داخل مرورگر فچ میشود که پرفورمنس پایینی دارد 
      </p>
      <p className='topic-text'>
      اما در نکست چه SSG یا SSR باشد چون روش pre rendering یا رندر از پیش است دیتا فچینگ در سمت سرور انجام میشود که پرفورمنس خیلی بهتری دارد
      </p>
      <Link className='topic-link' href="https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation#static-generation-with-data">Next.js document about this topic</Link>
    </>
  )
}

export default DataFetchingInNextjs
