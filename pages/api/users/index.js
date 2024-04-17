import fs from 'fs';
import path from 'path';

import connectToDB from '@/utils/users';
import usersModel from '@/models/user';

async function index(req, res) {
    connectToDB()
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
            
            // console.log(name);
            // res.json({name,email})

            if (!name.trim() || !email.trim()) {
               return res.status(422).json({ message: "Data is not valid ❌" })
            }

            const user = await usersModel.create({ name, email })

            console.log(user);

            if(user){
                return res.status(201).json({ message: "you registered successfuly"})
            }else{
                return res.json({message:"faild to register"})
            }

        }
        default: {
            res.json("welcome❤")
        }

    }
}

export default index
