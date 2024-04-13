import TopicContent from '@/components/module/TopicContent'
import React from 'react'

function DevelopGetApi() {
  return (
    <>
     <TopicContent
     text={"برای ساخت api در نکست باید فولدری به نام  api در پوشه pages بسازیم ودر آن فانکشنی را اکسپورت دیفالت کنیم در این فانکشن به رکوئست و رسپانس دسترسی داریم و به شکل زیر رسپانسی برای api میسازیم"}
     link={"https://nextjs.org/docs/pages/building-your-application/routing/api-routes"}
     code={
        `
        unction index(req , res) {
            return res.json("hello world🔆🔆🔱")//اگر ریکوئستی به این api فرستاده شود این جواب را میگیرد
          }
          
          export default index`
     }
     /> 
    </>
  )
}

export default DevelopGetApi

