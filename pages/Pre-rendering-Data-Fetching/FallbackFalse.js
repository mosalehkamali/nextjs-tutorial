import React from 'react'
import TopicHeader from '@/components/module/TopicHeader'
import Link from 'next/link'
import CodeBox from '@/components/module/CodeBox'


function FallbackFalse() {
  return (
    <>
     <TopicHeader></TopicHeader>
     <p className='topic-text'>
            در تابع getStaticPaths دو پراپرتی ریترن میشوند اولیpahts است و دومی Fallback است فال بک سه ولیو میتواند داشته باشد true false , "blocking" وقتی برابر با فالس باشد فقط ورودی هایی که در paths مشخص شده و صفحات اس اس جی آن ها در سرور ساخته شده است نمایش داده میشود و اگر یو آر ال ورودی دیگری بگیرد به صفحه نات فوند انتقال داده میشود..
     </p>
     <Link className='topic-link' href="https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths#generating-paths-on-demand">Next.js document about this topic</Link>
     <CodeBox code={
       `//روتی به شکل [id]داریم که میخواهیم به وسیله id روت برای هر محصول یک صفحه SSG بسازیم
       export async function getStaticPaths(){
           return{
               paths:[//پارامتر های ممکن در این قسمت مشخص میشوند
                   {params:{id:'1'}},
                   {params:{id:'2'}},
                   {params:{id:'3'}},
                   {params:{id:'4'}},
                   // این روت چهار داینامیک پارامتر دارد یعنی چهار صفحه  اس اس جی در سرور برای این روت ساخته میشود
               ],
               fallback:false // اگر پارامتر دیگری بجز پارامتر های بالا در یو آر ال قرار گیرند تلاشی 
                             // برای فچ اطلاعات آنها نمیشود و به صفحه نات فوند ریدایرکت میشود
           }
       }`
     }></CodeBox> 
    </>
  )
}

export default FallbackFalse
