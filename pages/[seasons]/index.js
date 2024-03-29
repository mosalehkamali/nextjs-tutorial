import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link"
import db from "../../data/db.json"

function index() {
  const router = useRouter().query.seasons
  const [season, setSeason] = useState('')
  const [topics, setTopics] = useState([])

  useEffect(() => {
    db.seasons.map(element => {
      if (element.path == router) {
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
      <ul>
        {
          topics.map(
            topic =>
              <li key={topic.id} >
                <Link href={topic.path}>{topic.title}</Link>
              </li>
          )
        }
      </ul>
    </>
  )
}

export default index
