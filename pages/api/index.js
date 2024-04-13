
function index(req, res) {
    switch (req.method) {
        case "GET": {
            res.json("wellcome❤")
            break;
        }
        case "POST": {
            res.json("rejesterd👍")
            break;
        }
        case "PUT": {
            res.json("replaced🔁")
            break;
        }
        case "DELETE": {
            res.json("removed❌")
            break;
        }
        default:{
            res.json("wellcome❤")
        }

    }
}

export default index
