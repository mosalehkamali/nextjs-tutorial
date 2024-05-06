import TopicContent from '@/components/module/TopicContent'
import Head from 'next/head'
import React from 'react'

function HeadComponentUsing() {
    return (
        <>
            <Head>
                <title>Next.js - {`<Head>`} Custom Document </title>
                <link rel="shortcut icon" href="/images/post01.png" />
                <meta name='description' content='this is a page to lean how to use Head component in next-js.'></meta>
            </Head>
            <TopicContent
                text={'کامپوننت Head در نکست دقیقا کار تگ head در html را انجام میدهد و ما در آن میتوانیم تگ های title و meta  را بنویسیم'}
                link={'https://nextjs.org/docs/pages/api-reference/components/head'}
                code={` <Head>
     <title>Next.js - {'< Head >'} Custom Document </title>
     <link rel="shortcut icon" href="/images/post01.png" />
     <meta name='description' content='this is a page to lean how to use Head component in next-js.'></meta>
 </Head>`}
            ></TopicContent>
        </>
    )
}

export default HeadComponentUsing
