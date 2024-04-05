import CodeBox from '@/components/module/CodeBox'
import TopicHeader from '@/components/module/TopicHeader'
import Link from 'next/link'
import React from 'react'

function RedirectInSSR() {
  return (
    <>
     <TopicHeader></TopicHeader> 
     <p className='topic-text'>
        برای ریدایرکت کردن در صفحات SSR از همان پراپرتی redirect استفاده میکنیم ویا برای فرستادن کاربر به صفحه نات فوند به همان شکل ssg در ssr  نات فوند را ترو میکنیم
     </p>
     <Link className='topic-link' href="https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering">Next.js document about this topic</Link>
     <CodeBox code={
            `import React from "react";

            function Post({ post }) {
              return (
                <div>
                  <h1>{post.title}</h1>
                  <p>{post.body}</p>
                </div>
              );
            }
            
            export async function getServerSideProps(context) {
              const { params } = context;
            
              const res = await fetch(
                'https://jsonplaceholder.typicode.com/posts/{params.id}'
              );
              const data = await res.json();
            
              if (!Object.keys(data).length) {//اگر آبجکت data خالی بود
                return {
                  notFound: true, // رفتن به صفحه نات فوند
                  redirect: { destination: "/" },//ریدایرکت به صفحه دلخواه
                };
              }
            
              return {
                props: {
                  post: data,
                },
              };
            }
            
            export default Post;
            
            `
     }></CodeBox>
    </>
  )
}

export default RedirectInSSR
