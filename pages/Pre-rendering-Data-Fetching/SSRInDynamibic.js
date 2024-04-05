import CodeBox from '@/components/module/CodeBox'
import TopicHeader from '@/components/module/TopicHeader'
import Link from 'next/link'
import React from 'react'

function SSRInDynamibic() {
  return (
    <>
     <TopicHeader></TopicHeader> 
     <p className='topic-text'>
      برای پیاده سازی صفحات ssr  در روت های داینامیک دقیقن مثل ssg با getServerSideProps رفتار میکنیم
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

export default SSRInDynamibic
