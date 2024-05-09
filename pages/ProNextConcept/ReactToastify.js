import TopicContent from "@/components/module/TopicContent";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ReactToastify() {
  const notify = () => toast("Wow so easy !");

  return (
    <>
      <TopicContent
        text={
          "برای نمایش نوتیفیکیشن های صفحه میتوانیم از پکیج react-toastify استفاده کنیم که با دستور npm i react-toastify نصب میشود "
        }
        link={"https://fkhadra.github.io/react-toastify/introduction/"}
      ></TopicContent>
      <button onClick={notify}>toastify notify</button>
      <ToastContainer draggable position="top-center" stacked />
    </>
  );
}

export default ReactToastify;
