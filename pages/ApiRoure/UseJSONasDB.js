import TopicContent from '@/components/module/TopicContent'
import React from 'react'

function UseJSONasDB() {
  return (
    <>
     <TopicContent
     text={'برای استفاده و ارتباط از دیتابیس در api باید از ماژول ها داخلی node.js استفاده کنیم مثل fa و path'}
     code={`
    import fs from 'fs';//ماژول های node را ایمپورت میکنیم
    import path from 'path';

    function index(req, res) {
        switch (req.method) {
            case "GET": {
                //آدرس دیتابیس را ایجاد میکنیم
                const dbPath = path.join(process.cwd(), "data", "users.json");//process.cwd() روتی که پروژه در آن اجرا میشود را برمیگردانند
                const data = fs.readFileSync(dbPath)//بامتد readFileSync(dbPath) فایلی که باید خوانده شود را دریافت میکند
                const  jsonData = JSON.parse(data);//داده ها را به جیسون پارس تبدیل میکنیم تا قابل خواندن شوند

                res.json(jsonData)
                break;
            }
        }}
     `}
     ></TopicContent> 
    </>
  )
}

export default UseJSONasDB
