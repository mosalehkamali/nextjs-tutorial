import TopicContent from '@/components/module/TopicContent'
import React from 'react'

function templateJS() {
  return (
    <>
     <TopicContent
     text={'با استفاده از فایل template.js که در درون layout  همسطح خودش به دور page  wrap  میشود میتوان استیت هایی ساخت که با تغییر page ثابت نمیماند و ری رندر میشوند.'}
     link={'https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates#templates'}
     code={`<Layout>
     {/* Note that the template is given a unique key. */}
     <Template key={routeParam}>{children}</Template>
   </Layout>`}
     ></TopicContent> 
    </>
  )
}

export default templateJS
