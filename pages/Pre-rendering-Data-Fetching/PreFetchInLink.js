import React from 'react'
import TopicHeader from '@/components/module/TopicHeader'
import Link from 'next/link'
import CodeBox from '@/components/module/CodeBox'

function PreFetchInLink() {
  return (
    <>
     <TopicHeader></TopicHeader>
     <p className='topic-text'>
     prefetch یکی از قابلیت های کامپوننت لینک است که باعث میشود لینک محتویات صفحه ای که لینک به آن متصل میشود را قبل از اینکه روی لینک کلیک بشود دریافت میکند تا آماده باشد و این پرفورمننس بالایی دارد الیته یک بار هم هنگامی که روی لینک هاور میشود اطلاعات صفحه فچ میشوند . prefetch فقط در زمان production یعنی بعد از بیلد تایم انجام میشود . حالت دیفالت prefetch ترو است اگر آن را فالی قرار بدهیم دیگر فچ از قبل انجتام نمیشود ولی فچ آن هاور همچنان انجام میشود .
     </p>
     <Link className='topic-link' href="https://nextjs.org/docs/pages/api-reference/components/link#prefetch">Next.js document about this topic</Link>
     <CodeBox code={
        `import Link from 'next/link'
 
        export default function Page() {
          return (
            <Link href="/dashboard" prefetch={false Or true}> 
              Dashboard
            </Link>
          )
        }`
     }></CodeBox> 
    </>
  )
}

export default PreFetchInLink
