import CodeBox from '@/components/module/CodeBox'
import TopicHeader from '@/components/module/TopicHeader'
import Link from 'next/link'
import React from 'react'

function ClientSideRendering() {
  return (
    <>
     <TopicHeader></TopicHeader> 
     <p className='topic-text'>
       برای اینکه صفحه نکست مثل ری اکت در سمت کلاینت رندر شود کافی است از هوک useEffect  بجای تابع های سمت سرور استفاده کنیم تا کد های ما بعد از جی اس لود در سمت کلاینت اجرا شوند و صفحه htnl  را برای کاربر بسازد
     </p>
     <Link className='topic-link' href="https://nextjs.org/docs/pages/building-your-application/data-fetching/client-side">Next.js document about this topic</Link>
     <CodeBox code={
            `import Link from "next/link";
            import React, { useEffect, useState } from "react";
            
            function Todos() {
              const [todos, setTodos] = useState([]);
            
              useEffect(() => {
                fetch('https://jsonplaceholder.typicode.com/todos') //داده  ها در سمت کلاینت دریافت میشوند
                  .then((res) => res.json())
                  .then((data) => setTodos(data));
              }, []);
            
              return (
                <div>
                  <ul>
                    {todos.length ? ( //اگر داده های گرفته شده وجود داشته باشند صفحه در سمت کلاینت ساخته میشود
                      todos.map((todo) => (
                        <li key={todo.id}>
                          <Link href={'/todos/{todo.id}'}>
                            <h3>{todo.title}</h3>
                          </Link>
                          <p>Complete: {todo.completed ? "✅" : "❌"}</p>
                          <hr />
                        </li>
                      ))
                    ) : (
                      <h1>Todos not found !!</h1>//این قسمت به صورت دیفالت در سمت سرور ساخته میشود
                    )}
                  </ul>
                </div>
              );
            }
            
            export default Todos;
            
            `
     }></CodeBox>
    </>
  )
}

export default ClientSideRendering
