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
            users.push(req.body)
            res.json({message:"registered👍", data:users})
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
