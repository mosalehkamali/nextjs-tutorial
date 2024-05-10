import connectToDB from "@/utils/users";
import usersModel from "@/models/user";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

function Register({ data }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const checkHanler = (event) => {
    if (event.target.checked) {
      setRememberMe(true);
    } else {
      setRememberMe(false);
    }
  };

  const Msg = ({ closeToast, toastProps, text , icon}) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <p>{text}</p>
      {icon}
    </div>
  );

  const notify = (message, icon) => {
    toast(<Msg text={message}  icon={icon}/>, {
      position: "top-center",
      autoClose: 3200,
      theme: "dark",
    });
  };

  async function registerHandler(event) {
    event.preventDefault();

    const newUser = { name, email, rememberMe };
    if (name.trim() && email.trim()) {
      const res = await fetch(`/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      const data = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setRememberMe(false);
        notify(
          data.message,
          <Image
            src={"/images/Animation.gif"}
            width={100}
            height={100}
            alt={"Animation"}
          />
        );
      }
    } else {
      notify(
        "Enter your username and email",
        <Image
          src={"/images/failed.gif"}
          width={100}
          height={100}
          alt={"failed"}
        />
      );
    }
  }

  return (
    <>
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="username"
          style={{ margin: "10px" }}
          placeholder="Username"
        />
        <br />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          style={{ margin: "10px" }}
          placeholder="Email"
        />
        <br />
        <input
          id="saveToken"
          checked={rememberMe}
          onChange={checkHanler}
          type="checkbox"
        />
        <label htmlFor="saveToken">remember me</label>
        <br />
        <button onClick={registerHandler} style={{ margin: "10px" }}>
          Register
        </button>
        <ToastContainer />
      </form>
      <ul dir="ltr">
        {data.map((user) => (
          <li key={data.indexOf(user)}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps(contaxt) {
  connectToDB();

  const users = await usersModel.find();

  return {
    props: {
      data: JSON.parse(JSON.stringify(users)), //داده ها را به کامپوننت ارسال میکنیم
    },
  };
}

export default Register;
