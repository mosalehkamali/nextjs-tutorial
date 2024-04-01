import React from 'react'
import TopicHeader from '@/components/module/TopicHeader'
import CodeBox from '@/components/module/CodeBox'
import Link from 'next/link'

function DynamicPathsSend() {
  return (
    <>
    <TopicHeader></TopicHeader>
    <p className='topic-text'>
            اگر تعداد داینامیک پارامتر ها زیاد باشد برای grtStaticPaths باید آن ها را به صورت داینامیک ارسال کنید 
    </p>
    <Link className='topic-link' href="https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation#scenario-2-your-page-paths-depend-on-external-data">Next.js document about this topic</Link>
    <CodeBox code={
    `//روتی به شکل [id]داریم که میخواهیم به وسیله id روت برای هر محصول یک صفحه SSG بسازیم
    export async function getStaticPaths(){

        const res = await fetch('https://URL...')//داده ها را دریافت میکنیم
        const data=await res.json();

        const paths = data.map(product =>{//روی دادده ها حلقه میزنیم تعداد صفحات مشخص میکنیم 
            return {params:{id: string(product.id)}}// از متد استریگ استفاده میکنیم تا پارامتر ها استرینگ باشند
        })
        
        return{
            paths:paths, //اگر پراپرتی و ولیو برا بر باشند فقط اسم پراپرتی را بنویسیم کافیه paths = paths:paths
            fallback:false
        }
    }`
    }></CodeBox>
  </>
  )
}

export default DynamicPathsSend

