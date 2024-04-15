import React, { useState } from 'react'

function Register() {
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

    </>
  )
}

export default Register
