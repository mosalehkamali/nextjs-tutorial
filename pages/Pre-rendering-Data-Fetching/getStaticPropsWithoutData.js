import React, { useState } from 'react'
import TopicHeader from '@/components/module/TopicHeader'
import Link from 'next/link'
import CodeBox from '@/components/module/CodeBox'

function getStaticPropsWithoutData({ textContent, example }) {
  
  const [code , setCode]= useState(example)

    return (
        <>
            <TopicHeader></TopicHeader>
            <p className='topic-text'> {textContent} </p>
            <Link className='topic-link' href="https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation#static-generation-without-data">Next.js document about this topic</Link>
           <CodeBox code={code} ></CodeBox>
        </>
    )
}

export default getStaticPropsWithoutData

export async function getStaticProps() {

    console.log('getStaticProps runing') // این کد در سمت سرور اجرا میشود و در بروزر قابل دیدن نیست

    return { // این پراپرتی ها به کامپوننت ریترن میشوند
        props: {
            textContent: `تابع getStaticProps در سمت سرور برای بک اند اجرا میشود 
          ولی پراپرتی که ریترن میکند برای همان کامپوننت یا روت خودش قابل استفاده است
          getStaticProps یک تابع async  می‌باشد. وبه شکل  زیر استفاده میشود `,
            example: `
import React from 'react'
import Link from 'next/link'

function getStaticPropsWithoutData({ textContent, example }) {
  
  const [code , setCode]= useState(example)

  return (
    <>
     <p className='topic-text'> {textContent} </p>

     <pre className="code-example"> {example} </pre>
    </>
  )
}

export default getStaticPropsWithoutData

export async function getStaticProps(){
    
    console.log('getStaticProps runing') // این کد در سمت سرور اجرا میشود و در بروزر قابل دیدن نیست

    return { // این پراپرتی ها به کامپوننت ریترن میشوند
        props:{
          textContent  : 'تابع getStaticProps در سمت سرور برای بک
           اند اجرا میشود ولی پراپرتی که ریترن میکند برای همان کامپوننت یا روت خودش قابل استفاده است
          getStaticProps یک تابع async  می‌باشد. وبه شکل  زیر استفاده میشود',
          example : 'کل این کد در تگ pre قرار میگیرد'
        },
    }
}`
        },
    }
}