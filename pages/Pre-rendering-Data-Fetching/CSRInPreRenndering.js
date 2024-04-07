import CodeBox from '@/components/module/CodeBox'
import TopicHeader from '@/components/module/TopicHeader'
import Link from 'next/link'
import React from 'react'

function CSRInPreRenndering() {
  return (
    <>
     <TopicHeader></TopicHeader> 
     <p className='topic-text'>
      میتوانیم در صفحه هایی که پری رندرینگ استفاده میکنند بعضی قسمت ها را در سمت کلاینت رندر کنیم 
     </p>
     <Link className='topic-link' href="https://nextjs.org/docs/pages/building-your-application/data-fetching/client-side">Next.js document about this topic</Link>
     <CodeBox code={
            `import React, { useState } from "react";

            function Todo({ todo: { id, title, completed } }) {
              const [todo, setTodo] = useState({ id, title, completed });
            
              console.log(id, title, completed);
            
              const toggleCompleteHandler = async () => { //این تابع در سمت کلاینت اجرا میشود
                const res = await fetch('http://localhost:4000/todos/{todo.id}', {//تغییرات را به سرور ارسال میکند
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    title: todo.title,
                    completed: !todo.completed,
                  }),
                });
                const data = await res.json();
            
                if (res.status === 200) {//اگر جواب اوکی بود تغییرات در سمت کلاینت در صفحه اعمال میشوند
                  // setTodo((prevTodo) => ({ ...prevTodo, completed: !prevTodo.completed }));
                  setTodo(data);
                  console.log("Todo Completed Successfully :))");
                }
              };
            
              return (
                <li>
                  <h2>
                    {todo.id}. {todo.title}
                  </h2>
                  <p>Complete: {todo.completed ? "✅" : "❌"}</p>
                  <button onClick={toggleCompleteHandler}>Toggle Completed</button>
                  <hr />
                </li>
              );
            }
            
            export async function getServerSideProps(context) { //این صفحه با استفاده از این تابع به صورت SSR رندر میشود
              const { params } = context;
              const res = await fetch('http://localhost:4000/todos/{params.id}');
              const data = await res.json();
            
              return {
                props: {
                  todo: data,
                },
              };
            }
            
            export default Todo;
            
            `
     }></CodeBox>
    </>
  )
}

export default CSRInPreRenndering