import React from 'react'
import Link from 'next/link';
import style from '@/styles/topic-header.module.css'
import CodeBox from '@/components/module/CodeBox';
import { useRouter } from 'next/router';

const fs = require("fs")
const path = require("path")

export default function topic({ dataSeason, data }) {


  const router = useRouter()
  const goBack = () => {
    router.back()
  }
  return (
    <>
      <div className={style.topicHeader} >
        <button className={style.seasonTitle} onClick={goBack} >{"<<<" + dataSeason.title + ">>>"}</button>
        <h3 className={style.topicTitle} >{topic.title}</h3>
        <div> <Link className={style.vidBtn} href={data.lessonLink}>Toturial Video</Link></div>
      </div>
      <p className="topic-text">{data.text}</p>

      {data.form ? <ul>{data.form.map(item => (
        <li className="topic-text" key={data.id}>{item}</li>
      ))}
      </ul> : null}

      {data.link ? <Link className='topic-link' href={data.link}>Next.js document about this topic</Link> : null}
      {data.code ? <CodeBox code={data.code} /> : null}
    </>
  )
}

export async function getStaticProps(context) {
  const season = context.params.season
  const topic = context.params.topic

  const pathData = path.join(process.cwd(), "data", "db.json");
  const seasonList = fs.readFileSync(pathData)
  const seasons = JSON.parse(seasonList).seasons;

  const dataSeason = seasons.find(item => item.path === season)

  const data = dataSeason.topics.find(item => item.path === topic)

  return {
    props: {
      dataSeason,
      data,
    }
  }
}

export async function getStaticPaths() {

  const pathData = path.join(process.cwd(), "data", "db.json");
  const seasonList = fs.readFileSync(pathData)
  const seasons = JSON.parse(seasonList).seasons;

  const paths = []
  const createPath = (season, topic) => {
    paths.push({
      params: { season: season.path, topic: topic.path }
    })
  }
  seasons.slice(2).map(season => season.topics.map(topic => createPath(season, topic)))

  return {
    paths,
    fallback: false,
  }
}

