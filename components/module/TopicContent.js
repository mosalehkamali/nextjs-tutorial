import Link from 'next/link'
import React from 'react'
import CodeBox from './CodeBox'
import TopicHeader from './TopicHeader'

function TopicContent({ text, list, link, code }) {
    return (
        <>
            <TopicHeader></TopicHeader>

            <p className="topic-text">{text}</p>

            {list ? <ul>{list.map(item => (
                <li className="topic-text" key={list.indexOf(item)}>{item}</li>
            ))}
            </ul> : null}

            {link ? <Link className='topic-link' href={link}>Documentation about this topic</Link> : null}

            {code ? <CodeBox code={code} /> : null}
        </>
    )
}

export default TopicContent
