import React, { useEffect,useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import style from '@/styles/topic-header.module.css'
import db from '../../data/db.json';

function TopicHeader() {
    const router = useRouter().pathname.split('/').splice(1);
    const [season, setSeason] = useState([])
    const [topic, setTopic] = useState([])
    const [videoLink , setVideoLink] = useState('')
  
    useEffect(() => {
      db.seasons.map(element => {
        if (element.path == router[0]) {
          setSeason(element)
          element.topics.map(topicElement =>{
            if(topicElement.path == router[1]){
                setTopic(topicElement)
                setVideoLink(topicElement.lessonLink)
            }
          })
        }
      }
      )
    }, [router])

    const rout = useRouter()

    const goBack= ()=>{
        rout.back()
    }

  return (
    <div className={style.topicHeader} >
        <button className ={style.seasonTitle} onClick={goBack} >{"<<<"+season.title+">>>"}</button>
        <h3 className ={style.topicTitle} >{topic.title}</h3>
       <div> <Link className ={style.vidBtn}  href={videoLink}>Toturial Video</Link></div>
    </div>
  )
}

export default TopicHeader
