import Link from 'next/link'
import React from 'react'
import CodeBox from './CodeBox'
import TopicHeader from './TopicHeader'

function TopicContent({ text, link, code }) {
    return (
        <>
            <TopicHeader></TopicHeader>
            <p className="topic-text">{text}</p>
            {link ? <Link className='topic-link' href={link}>Next.js document about this topic</Link> : null}
            {code ? <CodeBox code={code} /> : null}
        </>
    )
}

export default TopicContent
