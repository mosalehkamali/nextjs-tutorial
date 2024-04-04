import CodeBox from '@/components/module/CodeBox'
import TopicHeader from '@/components/module/TopicHeader'
import React from 'react'
import Link from 'next/link'
function getServerSidePropsUsing() {
  return (
    <>
     <TopicHeader></TopicHeader>
     <p className='topic-text'>
     از تابع getServerSideProps دقیقن مثل تابع getStaticProps استفاده میکنیم نکست کامپوننتی که در آن تابع getServerSideProps وجود داشته باشد را به صورت SSR رندر میکند 
     </p>
     <Link className='topic-link' href="https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering">Next.js document about this topic</Link>
     <CodeBox code={
        `export default function Page({ data }) {
            // کد های رندر دیتا
          }
           
          //  این تابع برای همه درخواست ها فراخوانی میشود
          export async function getServerSideProps() {
            // دیتای را از api  خارجی میگیریم
            const res = await fetch('https://.../data')
            const data = await res.json()
           
            //دیتا را به صفحه میفرستیم
            return { props: { data } }
          }`
     }
     ></CodeBox>
    </>
  )
}

export default getServerSidePropsUsing

