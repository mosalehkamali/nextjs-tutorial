import CodeBox from '@/components/module/CodeBox'
import TopicHeader from '@/components/module/TopicHeader'
import React from 'react'
import Link from 'next/link'

function QueryParamsRender() {
  return (
    <>
     <TopicHeader></TopicHeader> 
     <p className='topic-text'>
        query param در api بعد از ? میآید که بصورت کی و ولیو است ما در تابع getServerSideProps به آن دسترسی داریم
     </p>
     <Link className='topic-link' href="https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering">Next.js document about this topic</Link>
     <CodeBox code={
            `xport async function getServerSideProps(context) {

                const params = context.params //اطلاعات پارامتر های ورودی 
                const request = context.req //دسترسی به اطلاعات رکوئست کلاینت 
                const response = context.res //دسترسی به اطلاعات رسپانس سرور به رکوئست کلاینت
                const query = context.res //دسترسی به query params
            
                console.log(params)
                console.log(request)
                console.log(response)
                console.log(query)
            
                return{
                    props:  {}
                }
            
            }`
     }></CodeBox>
    </>
  )
}

export default QueryParamsRender
