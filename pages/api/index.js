import fs from 'fs';
import path from 'path';


function index(req, res) {
    switch (req.method) {
        case "GET": {
            
            const dbPath = path.join(process.cwd(), "data", "users.json");
            const data = fs.readFileSync(dbPath)
            const  jsonData = JSON.parse(data);

            res.json(jsonData)
            break;
        }
        case "POST": {
            users.push(req.body)
            res.json({ message: "registered👍", data: users })
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
