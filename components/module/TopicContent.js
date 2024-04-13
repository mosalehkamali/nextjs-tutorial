import Link from 'next/link'
import React from 'react'
import TopicHeader from './TopicHeader'

function TopicContent({ text , link }) {
  return (
    <>
    <TopicHeader></TopicHeader>
   <p className="topic-text">{text}</p>
   <Link className='topic-link' href={link?link:""}>Next.js document about this topic</Link>
    </>
  )
}

export default TopicContent
