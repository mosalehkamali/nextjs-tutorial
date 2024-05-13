import TopicContent from '@/components/module/TopicContent'
import React from 'react'

function layoutState() {
  return (
    <>
     <TopicContent
     text={'state هایی که در layout وجود دارند در عوض شدن صفحه ها عوض نمیشوند ومقدارشان ثابت میماند'}
     link={"https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates"}
     ></TopicContent> 
    </>
  )
}

export default layoutState
