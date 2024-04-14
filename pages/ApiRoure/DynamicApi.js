import TopicContent from '@/components/module/TopicContent'
import React from 'react'

function DynamicApi() {
    return (
        <>
            <TopicContent
                text={'برای استفاده از api به صورت داینامیک یک داینامیک روت ایجاد میکنیم و در آن میتوانیم query  ریکوئس را دریافت کرده و با توجه به آن اطلاعات مورد نظر را ارسال کرد'}
                link={'https://nextjs.org/docs/app/building-your-application/routing'}
                code={`//در این مثال یک داینامیک روت در یک داینامیک فولدر وجود دارد
        import db from '../../../data/db.json' //اطلاعات از دیتابیس دریافت میشوند
    
        export default function topics(req, res) {
    
        // فصل درخواست شده با فصل های دیتا بیس مقایسه و پیدا میشود
        const season = db.seasons.find(season => season.path === req.query.seasons)
        
        //موضوع درخواست شده از بین موضوعات فصل پیدا میشود
        const topic = season.topics.find(topic => topic.path === req.query.topics)
    
        res.json(topic)//اطلاعات موضوع در ریسپانس فرستاده میشوند
        }

      `}
            ></TopicContent>
        </>
    )
}

export default DynamicApi
