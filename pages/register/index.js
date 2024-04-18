import connectToDB from '@/utils/users'
import usersModel from '@/models/user';
import React, { useState } from 'react'


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
  connectToDB()

  const users = await usersModel.find() 
  
  return{
    props:{
      data:JSON.parse(JSON.stringify(users)) //داده ها را به کامپوننت ارسال میکنیم
    }
  }
}

export default Register
