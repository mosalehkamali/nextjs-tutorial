import React from 'react'
import TopicHeader from '@/components/module/TopicHeader'
import Link from 'next/link'
import CodeBox from '@/components/module/CodeBox'

function ISRTemplate() {
  return (
    <>
     <TopicHeader></TopicHeader>
     <p className='topic-text'>
    برای تبدیل کردن صفحه SSG به ISR ما باید در تابه getStaticProps پراپرتی را با نام revalidate برابر با یک ولیو نامبر که واحد آن ثانیه است ریترن کنیم. با این کار پس از ساخت صفحه اگر بعد از زمانی که مشخص کرده ایم ریکوئستی دیگر برای سرور ارسال شود آن صفحه یکبار دیگر ساخته میشود تا اگر اطلاعات آن تغییر کرده باشند اطلاعات جدید جایگزین شوند.    
    </p> 
    <Link className='topic-link' href="https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration">Next.js document about this topic</Link>
    <CodeBox code={
        `export async function getStaticProps() {
            const res = await fetch('https://api/exampel/')
            const data  = await res.json();//اطلاعات کاربران گرفته و ذخیره میشوند
        
            console.log("getStaticProps => ISR")//هر اگر ده ثانیه از ساخت آخرین صفحه گذشته باشد وباز ریکئوستی به 
            //سرور فرستاده شود دوباره تابه گت استاتیک پراپس اجرا میشود و این لاگ در سرور گرفته میشود
        
            return{
                props:{users:data},
                revalidate:10,//این زمان مشخص میکند چقدر از صفحه ساخت صفحه گذشته باشد
                             // با درخواست جدید صفحه ریجنریت شود
            }
        }`
    }></CodeBox>
    </>
  )
}

export default ISRTemplate

