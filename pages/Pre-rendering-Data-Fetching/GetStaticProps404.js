import React from 'react'
import TopicHeader from '@/components/module/TopicHeader'
import Link from 'next/link'
import CodeBox from '@/components/module/CodeBox'
import { notFound } from 'next/navigation'


function GetStaticProps404() {
  return (
    <>
    <TopicHeader></TopicHeader>
    <p className='topic-text'>
    زمانی که fallback برابر با true باشد و کاربر صفحه بجز صفحه های SSG ساخته شده را بخواهد برنامه برای دریافت اطلاعات صفحه موردنظر کاربر تلاش میکند اما اگر اصلا اطلاعات همچین صفحه های وجود نداشته باشد ارور نمایش داده میشود اگر بخواهیم در صورت ناموفق بودن فچ اطلاعات صفحه کاربر به صفحه 404 برود باید در تابع getStaticProps  پراپرتی notFound:true را ریترن بکنیم اما باید این را در نظر گرفت که notFound بر props ارجعیت دارد یعنی دیگر props ارسال نمیشود و هیچ صفحه ای ساخته نمیشود همه پارامترهای آن روت ها به notFound میروند برای حل این مشکل باید شرطی قرار بدهیم که فقط زمانی که وضعیت دیتای گرفته شده ok نبود notFound ریترن شود.
    </p>
    <Link className='topic-link' href="https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths#generating-paths-on-demand">Next.js document about this topic</Link>
    <CodeBox code={
      `export async function getStaticProps(context){
        const userId  = context.params.id; //پارامتر های ورودی گرفته میشوند
        const res = await fetch("https://api.example.com/paths/{userId}") //همه اطلاهات پارامتر های ممکن گرفته میشود
        
        if(res.status !== 200) { // اگر وضعیت درخواست فرستاده شده ok نباشد
            return {notFound:true}//notFound ریترن میشود و تابع همینجا بریک میشود و کاربر به صفحه 404 میرود
        }
        
        const data =res.json();
        return{
            props:{user : data,}, //اطلاعات فچ شه به کامپوننت برای ساخت صفجه ریترن میشوند
            // notFound:true, اگر اینجا نات فوند ریترن شود حتی اگر ریکوئست استتوس 200 هم باشد داده ها به 
           // کامپوننت ارسال نمیشوند و نتیجه نات فوند به کاربر نمایش داده میشود
        }
    }
    
    export async function getStaticPaths(){
        const res = await fetch("https://api.example.com/paths") //اطلاعات تمام صفحه هات ممکن فچ میشود
        const data= res.json()
        
        const paths = data.slice(0,3).map((user)=>{ //صفحه هایی که میخواهیم آماده باشند انتخاب میشوند
            return {params: {id: String(user.id)}}
        })
        return{
            paths, //صفحه ها ریترن میشوند تا در سرور ساخته و آماده باشند
            fallback: true //اگر کاربر صفحه ای بجز صفحه های آماده بخواهد برای دریافت اطلاعات
                          // وساخت صفحه تلاش شود
        }
    }`
    }></CodeBox> 
   </>
  )
}

export default GetStaticProps404



