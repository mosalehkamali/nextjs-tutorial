import connectToDB from '@/utils/users';
import usersModel from '@/models/user';
import { isValidObjectId } from 'mongoose';


export default async function handle(req, res) {
    connectToDB()
    if (req.method === "DELETE") { //متد را چک میکنیم

        const id = req.query.id //آی دی کوئری ارسال شده را ذخیره میکنیم

        if(isValidObjectId(id)){
            const deletedUser = await usersModel.findOneAndDelete({ _id: id })
            if (deletedUser) {
                //اگر خطا نداشت پیغام موفقیت حذف را ارسال میکنیم
                res.json({ message: "User removed successfuly" })
            } else {
                // اگر با خطا مواجه شدیم خطا را ارسال میکنیم
                res.status(404).json({ message: "User not found" });
            }
        }else{
            res.status(422).json({message:"User ID is not valid !!"})
        }

    } else if (req.method === "PUT") {
        const { name, email } = req.body //تغییراتی که باید انجام شود را دریافت میکنیم

        const id = req.query.id //آی دی کوئری ارسال شده را ذخیره میکنیم

        const updatedUser= await usersModel.findOneAndUpdate({_id : id}, {name ,email})

        if (updatedUser) {
                //اگر خطا نداشت پیغام موفقیت حذف را ارسال میکنیم
                res.json({ message: "Data edited successfuly" })
            } else {
                // اگر با خطا مواجه شدیم خطا را ارسال میکنیم
                res.status(404).json({ message: "User not found" });
            }
    } else if (req.method === "GET") {
        const id = req.query.id

        const user = await usersModel.find({ _id: id })

        res.json(user)

    } else {
        //اگر متد دلیت نبود عدم ساپرت متد را  ارسال میکنیم
        res.status(505).json({ message: "Method not supported" });
    }
}


