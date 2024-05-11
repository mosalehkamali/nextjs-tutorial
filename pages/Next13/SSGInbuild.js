import TopicContent from '@/components/module/TopicContent'
import React from 'react'

function SSGInbuild() {
  return (
    <>
     <TopicContent
     text={'در app router دیگر متد های getStaticProps و getServerSideProps وجود ندارند و کامپوننت ها به صورت دیفالت ssg  هستند یعنی  در سمت سرور رندر میشوند و اگر دیتایی فچ شود آن را از سرور میگیرند و به صورت استاتیک رندر میکنند و فایل html آن را در سرور ذخیره و نگهداری میکنند.'}
     link={'https://nextjs.org/docs/app/building-your-application/caching'}
     ></TopicContent> 
    </>
  )
}

export default SSGInbuild
