import TopicContent from '@/components/module/TopicContent'
import React from 'react'

function HandleISR() {
  return (
    <>
     <TopicContent
     text={'برای ساخت صفحه isr باید در ورودی دوم fetch {next:{revalidate: مدت زمان آپدیت }} قرار بدهیم با این کار در ابتدا صفحه ssg  ساخته میشود ولی بعد از زمان مشخص شده اگر درخواستی ارسال شود دوباره دیتا فچ میشود و صفحه جدید ساخته میشود.'}
     link={'https://nextjs.org/docs/app/building-your-application/caching#fetch-optionsnextrevalidate'}
     code={`async function usersLayout({ children }) {
        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
          next: {
            revalidate: 10,// بعد از  ده ثانیه دیتای جدید فچ و صفحه جدید ساخته میشود
          },
        });`}
     ></TopicContent> 
    </>
  )
}

export default HandleISR
