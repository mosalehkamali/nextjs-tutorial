import TopicContent from '@/components/module/TopicContent'
import React from 'react'

function NestedLayout() {
  return (
    <>
     <TopicContent
     text={"ما میتوانیم برای هرکدام از صفحه ها  یک  layout  بسازیم و محتویات صفحه را در ان قرار بدهیم"}
     link={'https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts'}
     code={`// app/users/layout.js
     import React from 'react'

     function usersLayout({children}) {
       return (
         <>
          <h1>users layout</h1>
          {children}
         </>
       )
     }
     
     export default usersLayout
     `}
     ></TopicContent> 
    </>
  )
}

export default NestedLayout
