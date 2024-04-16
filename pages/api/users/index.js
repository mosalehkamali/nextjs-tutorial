import fs from 'fs';
import path from 'path';

const mongoose = require('mongoose')


function index(req, res) {
    mongoose.connect('mongodb://127.0.0.1:27017/users')//users is the database name
        .then(() => console.log('Connected  to database successfuly'))
        .catch((err) => console.log('Something went wrong', err));

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
            if (!name.trim() || !email.trim()) {
                res.status(422).json({ message: "Data is not valid ❌" })
            }

            const dbPath = path.join(process.cwd(), "data", "users.json");//process.cwd() روتی که پروژه در آن اجرا میشود را برمیگردانند
            const data = fs.readFileSync(dbPath)//بامتد readFileSync(dbPath) فایلی که باید خوانده شود را دریافت میکند
            const jsonData = JSON.parse(data);//داده ها را به جیسون پارس تبدیل میکنیم تا قابل خواندن شوند
            jsonData.users.push({
                id: crypto.randomUUID(),//یک آیدی رندم میسازیم
                name,
                email
            })//اطلاعات فرستاده شده را در آرایه دیتا بیس ذخیره میکنیم


            const err = fs.writeFileSync(dbPath, JSON.stringify(jsonData))//دیتای جدید را در فایل دیتابیس ذخیره میکنیم

            if (err) {
                res.json(err)
            } else {

                res.status(201).json({ message: true, data: { ...jsonData } })
            }
            break;
        }
        default: {
            res.json("welcome❤")
        }

    }
}

export default index
