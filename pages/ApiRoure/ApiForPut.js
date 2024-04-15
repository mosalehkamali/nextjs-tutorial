import TopicContent from '@/components/module/TopicContent'
import React from 'react'

function ApiForPut() {
  return (
    <>
     <TopicContent
     text={'متد put باید در یک روت داینامیک باشد تابتواند روی داده های مختلف که از کودری api  میگیرد تغییر اعمال کند.'}
     link={"https://nextjs.org/docs/pages/building-your-application/routing/api-routes"}
     code={`
     import fs from 'fs';
    import path from 'path';

    export default function handle(req, res) {
    } else if (req.method === "PUT") {
        const { name, email } = req.body //تغییراتی که باید انجام شود را دریافت میکنیم
        
        const query = req.query.id //آی دی کوئری ارسال شده را ذخیره میکنیم
        
        //آدرس فایل دیتابیس را ذخیره میکنیم
        const filePath = path.join(process.cwd(), '/data', 'users.json');
        //دیتا را از ادرس ایجاد شده میخوانیم
        const users = fs.readFileSync(filePath);
        //دیتا را به صورت آبجکت در آورده و ذخیره میکنیم
        const parsedUsers = JSON.parse(users).users;
        
        //چک میکنیم که دیتای خواسته شده وجود دارد یا نه
        const isUser = parsedUsers.some(user => String(user.id) === String(query));
        
        //اگر دیتا موجود بود
        if (isUser) {
            parsedUsers.some(user => {
                if (String(user.id === String(query))) { //دیتای مورد نظر را عوض میکنیم
                    user.name = name
                    user.email = email
                    return true
                } else return false
            })
            //دیتای ادیت شده را به دیتا بیس میفرستیم
            const err = fs.writeFileSync(filePath, JSON.stringify({ "users": parsedUsers }));

            if (err) {
                // اگر با خطا مواجه شدیم خطا را ارسال میکنیم
                res.status(403).json(err)
            } else {
                //اگر خطا نداشت پیغام موفقیت حذف را ارسال میکنیم
                res.json({message:"Data edited successfuly"})
            }
        } else {
            //اگر دیتای خواسته شده وجود نداشت خطا را ارسال میکنیم
            res.status(404).json({ message: "User not found" });
        }
    } else {
        //اگر متد put نبود عدم ساپرت متد را  ارسال میکنیم
        res.status(505).json({ message: "Method not supported" });
    }
}



     `}
     ></TopicContent> 
    </>
  )
}

export default ApiForPut
