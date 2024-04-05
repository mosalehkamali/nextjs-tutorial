import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link"
import db from "../../data/db.json"

function Season() {
    const router = useRouter().pathname
    const [season, setSeason] = useState('')
    const [topics, setTopics] = useState([])
  
    useEffect(() => {
      db.seasons.map(element => {
        if (element.path == router.replace('/', '')) {
          setSeason(element)
          setTopics(element.topics)
        }
      }
      )
    }, [router])
  
    return (
      <>
        <h1 className='title'>
          {season.title}
        </h1>
        <ul className='season-ul'>
          {
            topics.map(
              topic =>
                <li className='season-li' key={topic.id} >
                  <Link href={router + "/" + topic.path}>{topic.title}</Link>
                </li>
            )
          }
        </ul>
      </>
  )
}

export default Season
