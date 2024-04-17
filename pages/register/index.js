import React, { useState } from 'react'

const fs = require('fs')
const path = require('path')

function Register({data}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')


  async function registerHandler(event) {
    event.preventDefault()
    const newUser = { name, email }
    if (name.trim() && email.trim()) {
      const res = await fetch(`/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
      })
      const data = await res.json()
      if (res.status === 201) {
        setName('')
        setEmail('')
        console.log(data)
      }
    } else {
      alert("Data is not valid ❌")
    }
  }

  return (
    <>
      <form >
        <input value={name} onChange={e => setName(e.target.value)} type="text" name='username' style={{ margin: "10px" }} placeholder='Username' />
        <br />
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" name='email' style={{ margin: "10px" }} placeholder='Email' />
        <br />
        <button onClick={registerHandler} style={{ margin: "10px" }} >Register</button>
      </form>
      <ul dir='ltr'>
        {data.map(user=>(<li key={user.id}>{user.name}</li>))}
      </ul>

    </>
  )
}

export async function getStaticProps(contaxt) {

  const dbPath = path.join(process.cwd(), "data", "users.json");//process.cwd() روتی که پروژه در آن اجرا میشود را برمیگردانند
  const data = fs.readFileSync(dbPath)//بامتد readFileSync(dbPath) فایلی که باید خوانده شود را دریافت میکند
  const jsonData = JSON.parse(data);//داده ها را به جیسون پارس تبدیل میکنیم تا قابل خواندن شوند
  return{
    props:{
      data:jsonData.users //داده ها را به کامپوننت ارسال میکنیم
    }
  }
}

export default Register
