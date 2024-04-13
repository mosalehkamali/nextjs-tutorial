import TopicContent from '@/components/module/TopicContent'
import React from 'react'

function AccessRequest() {
  return (
    <>
     <TopicContent
     text={'ما با پراپرتی req.method میتوانیمبه نوع ریکوئست ارسال شده دسترسی داشته باشیم و با توجه به متد ریکوئست api رسپانس را ارسال کنیم'}
     link={'https://nextjs.org/docs/pages/building-your-application/routing/api-routes'}
     code={`
     function index(req, res) {
        switch (req.method) { //با توجه به متد درخواست رسپانس های مختلف ارسال میشود
            case "GET": {
                res.json("wellcome❤")
                break;
            }
            case "POST": {
                res.json("rejesterd👍")
                break;
            }
            case "PUT": {
                res.json("replaced🔁")
                break;
            }
            case "DELETE": {
                res.json("removed❌")
                break;
            }
            default:{
                res.json("wellcome❤")
            }
    
        }
    }
    
    export default index
    
     `}
     ></TopicContent> 
    </>
  )
}

export default AccessRequest
