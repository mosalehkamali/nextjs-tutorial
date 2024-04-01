import React from 'react'
import TopicHeader from '@/components/module/TopicHeader'
import CodeBox from '@/components/module/CodeBox'
import Link from 'next/link'

function SSGinDynamicRout() {
  return (
    <>
      <TopicHeader></TopicHeader>
      <p className='topic-text'>
        تابع getStaticProps پارامتری را دریافت میکند که پراپرتی به اسم params  دارد که به ما اسم روت که در آن هستیم را میدهد البته برای ساخت SSG در روت داینامیک نیاز به تابع getStaticPaths هست
      </p>
      <Link className='topic-link' href="https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation#scenario-2-your-page-paths-depend-on-external-data">Next.js document about this topic</Link>
      <CodeBox code={
            `//روتی به شکل [id]داریم که میخواهیم به وسله id روت برای هر محصول یک صفحه SSG بسازیم

            export async function getStaticProps(context){ //context میتواند اسمی دلخواه باشد 
                const nameId = context.params.id
                const res = await fetch('https://sabzlearn.ir/lesson/'+{nameId})
                const data = await res.json();
            
                return{
                    props:{
                        product:data,
                    },
                }
            }`
      }></CodeBox>
    </>
  )
}

export default SSGinDynamicRout

