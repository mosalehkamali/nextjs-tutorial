import db from '../../../data/db.json'

export default function topics(req, res) {

    const season = db.seasons.find(season => season.path === req.query.seasons)
    const topic = season.topics.find(topic => topic.path === req.query.topics)

    if(topic){
        res.json(topic)
    }else{
        res.status(404).json({message :'Topic not found'})
    }

}

