const mongoose = require('mongoose')

mongoose.connection.models = {};// Clear the Mongoose cache

const schema = new mongoose.Schema({ //برای ساخت کالاکشن  برای هر کدام از فیلد های داخل  اططلاعاتی ذخیره کنیم
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    }
})

const model = mongoose.model('costomer', schema)//نام واسکیمای مدل را میدهیم تا ساخته شود

export default model;