import fs from 'fs';
import path from 'path';

export default function handle(req, res) {
    if (req.method === "DELETE") { //متد را چک میکنیم

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
        if(isUser){
            //دیتا با آیدی کوئری را فیلتر میکنیم و آرایه جدید را ذخیره میکنیم
            const newUsers = parsedUsers.filter(user => String(user.id) !== String(query));
            
            //آرایه جدید  را به صورت جیسون در دیتابیس ذخیره میکنیم
            const err = fs.writeFileSync(filePath, JSON.stringify({"users":newUsers}));
            
            if(err){
                // اگر با خطا مواجه شدیم خطا را ارسال میکنیم
                res.status(403).json(err)
            }else{
                //اگر خطا نداشت پیغام موفقیت حذف را ارسال میکنیم
                res.json({message:"User removed successfuly"})
            }
        }else{
            //اگر دیتای خواسته شده وجود نداشت خطا را ارسال میکنیم
            res.status(404).json({message:"User not found"});
        }
    }else{
        //اگر متد دلیت نبود عدم ساپرت متد را  ارسال میکنیم
        res.status(505).json({message:"Method not supported"});
    }
}


