import TopicContent from '@/components/module/TopicContent'
import React, { useEffect } from 'react'


function SendReqToApi() {

    useEffect(() => {

        const fetchData= async ()=>{

            const res = await  fetch("/api")
            const data = await res.json();
            console.log(data)
        }

        fetchData()

    },[])

  return (
    <>
     <TopicContent 
     text={"برای ازسال رکوئست از فرانت به api ساخته شده در نکست فقط کافیست آدرسroute آن api را برای فچ کردن بدهیم"}
     link={"https://nextjs.org/docs/pages/building-your-application/routing/api-routes"}
     code={
        `
        function SendReqToApi() {

            useEffect(() => {
        
                const fetchData= async ()=>{
        
                    const res = await  fetch("/api") // reoute را فچ میکنیم
                    const data = await res.json();// رسپانس را ذخیره میکنیم
                    console.log(data) // رسپانس را در کنسول نمایش میدهیم
                }
        
                fetchData()
                
            },[])
        
          return (
            <>
             <TopicContent></TopicContent> 
            </>
          )
        }
        export default SendReqToApi
     `}
     ></TopicContent> 
    </>
  )
}
export default SendReqToApi
