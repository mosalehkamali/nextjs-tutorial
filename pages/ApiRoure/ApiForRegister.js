import TopicContent from '@/components/module/TopicContent'
import React from 'react'

function ApiForRegister() {
  return (
    <>
     <TopicContent
     text={'برای ذخیره اطلاعات در فایل دیتابیس از متد fs.writeFile() استفاده میکنیم'}
     code={`
     import fs from 'fs';
import path from 'path';


function index(req, res) {
    switch (req.method) {
        case "GET": {

            const dbPath = path.join(process.cwd(), "data", "users.json");
            const data = fs.readFileSync(dbPath)
            const jsonData = JSON.parse(data);

            res.json(jsonData)
            break;
        }
        case "POST": {
            const { name, email } = req.body //اطلاعات فرستاده شده در باردی را میگیریم
            //آدرس دیتابیس را ایجاد میکنیم
            const dbPath = path.join(process.cwd(), "data", "users.json");//process.cwd() روتی که پروژه در آن اجرا میشود را برمیگردانند
            const data = fs.readFileSync(dbPath)//بامتد readFileSync(dbPath) فایلی که باید خوانده شود را دریافت میکند
            const jsonData = JSON.parse(data);//داده ها را به جیسون پارس تبدیل میکنیم تا قابل خواندن شوند
            jsonData.users.push({
                id: crypto.randomUUID(),//یک آیدی رندم میسازیم
                name,
                email
            })//اطلاعات فرستاده شده را در آرایه دیتا بیس ذخیره میکنیم
            fs.writeFile(dbPath, JSON.stringify(jsonData))//دیتای جدید را در فایل دیتابیس ذخیره میکنیم

            res.status(201).json({ message: "registered👍", jsonData})
            break;
        }
     `}
     ></TopicContent> 
    </>
  )
}

export default ApiForRegister
