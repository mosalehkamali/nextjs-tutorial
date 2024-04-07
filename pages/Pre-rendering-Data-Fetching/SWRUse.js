import CodeBox from '@/components/module/CodeBox'
import TopicHeader from '@/components/module/TopicHeader'
import Link from 'next/link'
import React from 'react'

function SWRUse() {
  return (
    <>
     <TopicHeader></TopicHeader> 
     <p className='topic-text'>
     SWR یک کتابخانه بای دیتا فچینگ است که بجای هوک useEffect میتوانیم از این کتابخانه استفاده کنیم
     یکی از قابلیت های SWR این است که اگر تغییری در دیتا بیس ما صورت بگیرد خئدش به صورت خودکار درخواستی به سرور ارسال میکند و اطلاعات صفحه را آپدیت میکند
     </p>
     <Link className='topic-link' href="https://nextjs.org/docs/pages/building-your-application/data-fetching/client-side#client-side-data-fetching-with-swr">Next.js document about this topic</Link>
     <br></br>
     <Link className='topic-link' href="https://swr.vercel.app/docs/getting-started">SWR document </Link>
     <CodeBox code={
            `
            //اول پکیج swr را با کامند زیر نصب میکنیم
                    npm i swr
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            
            import useSWR from 'swr'
 
            const fetcher = () => fetch(https://example/api/).then((res) => res.json())//اطلاعات فچ میشوند
             
            function Profile() {
                //در پارامتر اول آدرس دیتا هایی که باید در swr  ذخیره شوند را در سرور میدهیم
              const { data, error } = useSWR('/api/profile-data', fetcher)//تابع فچ اطلاعات به هوک swr پاس  داده میشوند
             
              if (error) return <div>Failed to load</div>
              if (!data) return <div>Loading...</div>
             
              return (
                <div>
                  <h1>{data.name}</h1>
                  <p>{data.bio}</p>
                </div>
              )
            `
     }></CodeBox>
    </>
  )
}

export default SWRUse