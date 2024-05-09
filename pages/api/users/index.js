import connectToDB from "@/utils/users";
import usersModel from "@/models/user";
import { serialize } from "cookie";
import { generateToken } from "@/utils/auth";

async function index(req, res) {
  connectToDB();
  switch (req.method) {
    case "GET": {
      const users = await usersModel.find();

      res.json(users);
      break;
    }
    case "POST": {
      const { name, email, rememberMe } = req.body; //اطلاعات فرستاده شده در باردی را میگیریم
      //آدرس دیتابیس را ایجاد میکنیم

      if (!name.trim() || !email.trim()) {
        return res.status(422).json({ message: "Data is not valid ❌" });
      }

      const user = await usersModel.findOne({ email });

      if (user) {
        if (rememberMe) {

          const token = generateToken({ name: user.name, email: user.email });

          return res
            .status(200)
            .setHeader(
              "Set-Cookie",
              serialize("token", token, {
                httpOnly: true,
                maxAge: 60 * 60 * 24,
              })
            )
            .json({ message: "you signed in successfuly" });
        }
        return res.status(200).json({ message: "you signed in successfuly" });
      } else {
        return res.json({ message: "faild to register" });
      }
    }
    default: {
      res.json("welcome❤");
    }
  }
}

export default index;
