import React from 'react'
import TopicHeader from '@/components/module/TopicHeader'
import Link from 'next/link'
import CodeBox from '@/components/module/CodeBox'

function DataFetchingInSSG({ data }) {
    return (
        <>
            <TopicHeader></TopicHeader>
            <p className='topic-text'>
                لیست کالا های زیر از طریق API  فیک به وسیله کد زیر گرفته شده و در کامپوننت از طریق props در دسترس قرار گرفته.
            </p>
            <Link className='topic-link' href="https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation#static-generation-with-data">Next.js document about this topic</Link>
            <br />
            <br />
            {data.map((product) => <p dir='ltr' key={product.id}>{product.id + '-' + product.title}</p>)}
            <CodeBox code={
`export async function getStaticProps(){

   const res =  await fetch('https://fakestoreapi.com/products?limit=5')
   const data = await res.json();

   return{
       props: {data}, // این پراپ دیتا را برای کامپوننت ارسال میکند 
   }
}`}></CodeBox>
        </>
    )
}

export default DataFetchingInSSG

export async function getStaticProps() {
    const res = await fetch('https://fakestoreapi.com/products?limit=5')
    const data = await res.json();
    return {
        props: { data }, // will be passed
    }
}