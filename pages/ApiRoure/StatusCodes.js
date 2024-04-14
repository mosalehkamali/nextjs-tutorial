import TopicContent from '@/components/module/TopicContent'
import React from 'react'

function StatusCodes() {
  return (
    <>
     <TopicContent
     text={'برای تعیین وضعیت رسپانس با کد استاتوس از res.status() استفاده میکنیم که ورودی نامبر میگیرد '}
     link={'https://nextjs.org/docs/pages/building-your-application/routing/api-routes'}
     code={`
     mport db from '../../../data/db.json'

    export default function topics(req, res) {

    const season = db.seasons.find(season => season.path === req.query.seasons)
    const topic = season.topics.find(topic => topic.path === req.query.topics)

    if(topic){ 
        res.json(topic)
    }else{ //اگر دیتای مورد نظر وجود نداشته باشد کد ستاتوس 404 ارسال میشود
        res.status(404).json({message :'Topic not found'})
    }

    }
     `}
     ></TopicContent> 
    </>
  )
}

export default StatusCodes
