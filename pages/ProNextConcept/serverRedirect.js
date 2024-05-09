import TopicContent from '@/components/module/TopicContent'
import React from 'react'

function serverRedirect() {
  return (
    <>
     <TopicContent
     text={'برای ریدایرک کردن کاربر در سمت سرور فقط کافی است در api مد نظر از کد زیر استفاده کنیم'}
     code={`res.redirect('/rout')`}
     ></TopicContent> 
    </>
  )
}

export default serverRedirect
