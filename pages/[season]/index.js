import Link from 'next/link';
import React from 'react'


const fs = require('fs')
const path = require('path')

export default function index({season}) {
  return (
    <>
    <h1 className='title'>
      {season.title}
    </h1>
    <ul className='season-ul'>
      {
        season.topics.map(
          topic =>
            <li className='season-li' key={topic.id} >
              <Link href={season.path+'/'+topic.path}>{topic.title}</Link>
            </li>
        )
      }
    </ul>
  </>
  )
}

export async function getStaticProps(context) {
  
  const route = context.params.season;
  
  const dataPath = path.join(process.cwd(), 'data', 'db.json')
  
  const data = fs.readFileSync(dataPath)
  
  const seasons = JSON.parse(data).seasons
  
  const season = seasons.find((item) => item.path === route)
  return {
    props: {
      season,
    }
  }
}
export async function getStaticPaths() {
  const dataPath = path.join(process.cwd(), 'data', 'db.json')

  const data = fs.readFileSync(dataPath)

  const seasons = JSON.parse(data).seasons

  const paths = seasons.slice(2).map(season => ({ params: { season: season.path } }))

  return {
    paths,
    fallback: false
  }
}

