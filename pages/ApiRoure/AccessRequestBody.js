import TopicContent from '@/components/module/TopicContent'
import React from 'react'

function AccessRequestBody() {
    return (
        <>
            <TopicContent
                text={'با پراپرتی req.body میتوانیم به بادی که در متد ها یPOSTوPUT ارسال شده دسترسی داشته باشیم وآن را استفاده کنیم.'}
                link={"https://nextjs.org/docs/pages/building-your-application/routing/api-routes"}
                code={`
             //Fake database
        const users = [
            {
                id: 1,
                name: "John Doe",
                email: "john@gmail.com"
            },
        ]
        
        function index(req, res) {
            switch (req.method) {
                case "GET": {
                    res.json("welcome❤")
                    break;
                }
                case "POST": {
                    users.push(req.body) //بادی ارسال شده دریافت میشود و در دیتابیس ذخیره میشود
                    res.json({message:"registered👍", data:users}) // لیست کاربران را به فرانت ارسال میشود
                    break;
                }
                case "PUT": {//PATCH
                    res.json("replaced🔁")
                    break;
                }
                case "DELETE": {
                    res.json("removed❌")
                    break;
                }
                default: {
                    res.json("welcome❤")
                }
            
            }
        }
        
        export default index

     `}
            ></TopicContent>
        </>
    )
}

export default AccessRequestBody
