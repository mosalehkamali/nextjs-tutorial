import React from 'react'
import TopicHeader from '@/components/module/TopicHeader'
import CodeBox from '@/components/module/CodeBox'
import Link from 'next/link'

function GetStaticPropsRedirect() {
    return (
        <>
            <TopicHeader></TopicHeader>
            <p className='topic-text'> 
                برای ریدایرکت کردن کاربر باید در تابع getStaticProps پراپرتی redirect را با ولیو "/" : destination 
                ریترن بکنیم
            </p>
            <Link className='topic-link'  href="https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props">Next.js document about this topic</Link>
            <CodeBox code= {
    `export async function getStaticProps(context) {
        const userId = context.params.id
        const res = await fetch('https://example/api/{userId}');//اطلاعات فچ میشوند
    
        if (res.status !== 200) { //هر شرطی میتواند در این قسمت قرار گیرد
            return {
                redirect: { destination: "/روتی که میخواهیم کاربر به آن ریدایرکت شود" }
            }
        }
     
        return {
            props: { user: data }
        }
    }`
            }></CodeBox>
        </>
    )
}

export default GetStaticPropsRedirect

