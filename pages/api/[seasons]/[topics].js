import db from '../../../data/db.json'

export default function topics(req, res) {

    const season = db.seasons.find(season => season.path === req.query.seasons)
    const topic = season.topics.find(topic => topic.path === req.query.topics)

    res.json(topic)
}

