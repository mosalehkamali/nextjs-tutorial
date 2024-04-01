import React from 'react'
import TopicHeader from '@/components/module/TopicHeader'
import CodeBox from '@/components/module/CodeBox'
import Link from 'next/link'

function UseGetStaticPaths() {
  return (
    <>
    <TopicHeader></TopicHeader>
    <p className='topic-text'>
     در صفحاتی بخوای به صورت SSG رندر بشوند واین صفحات اگر به صورت داینامیک روت باشند باید  getStaticPaths  استفاده شود که مشخص بشود که داینامیک پارامترهای ما چه چیز هایی میتوانند باشند تا صفحات به سرور معرفی شوند که آنها در سرور از قبل رندر شوند  
    </p>
    <Link className='topic-link' href="https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation#scenario-2-your-page-paths-depend-on-external-data">Next.js document about this topic</Link>
    <CodeBox code={
    `//روتی به شکل [id]داریم که میخواهیم به وسیله id روت برای هر محصول یک صفحه SSG بسازیم
    export async function getStaticPaths(){
        return{
            paths:[//پارامتر های ممکن به این شکل باید ریترن بشوند
                {params:{id:'1'}}, //پارامتر ها باید به صورت استرینگ باشند
                {params:{id:'2'}},
                {params:{id:'3'}},
                {params:{id:'4'}},
                // این روت چهار داینامیک پارامتر دارد یعنی چهار صفحه  اس اس جی در سرور برای این روت ساخته میشود
            ],
            fallback:false
        }
    }
    `
    }></CodeBox>
  </>
  )
}

export default UseGetStaticPaths

