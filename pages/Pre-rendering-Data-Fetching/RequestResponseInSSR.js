import CodeBox from '@/components/module/CodeBox'
import TopicHeader from '@/components/module/TopicHeader'
import Link from 'next/link'
import React from 'react'


function RequestResponseInSSR() {
  return (
    <>
    <TopicHeader></TopicHeader>
    <p className='topic-text'>
        زمانی که یک صفحه درخواست میشود request به سرور فرستاده میشود و سرور یک response به بروزر برمیگرداند ما در تابع getServerSideProps به این ریکوئست و رسپانس دسترسی داریم که اطلاعات خیلی زیادی از کاربر در اختیار ما میگذارد
    </p>
    <Link className='topic-link' href="https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering">Next.js document about this topic</Link>
      <CodeBox code={
        `xport async function getServerSideProps(context) {

            const params = context.params //اطلاعات پارامتر های ورودی 
            const request = context.req //دسترسی به اطلاعات رکوئست کلاینت 
            const response = context.res //دسترسی به اطلاعات رسپانس سرور به رکوئست کلاینت
        
            console.log(params)
            console.log(request)
            console.log(response)
        
            return{
                props:  {}
            }
        
        }`
      }>
      </CodeBox>
    </>
  )
}

export default RequestResponseInSSR
