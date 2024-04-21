const mongoose = require('mongoose')


const connectToDB = async () => {
    try {

        if (mongoose.connections[0].readyState) {
            return false;
        }
        await mongoose.connect('mongodb://127.0.0.1:27017/next-tutorial')//users is the database name
        console.log('Connected  to database successfuly')
    } catch (err) {
        console.log('Something went wrong', err)
    }
}

export default connectToDB;