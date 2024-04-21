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
},
{
    timestamps: true 
}
)

const model = mongoose.models.User || mongoose.model("User", schema);
//اول بررسی میکند که آیا این کالاکشن قبلا ساخته شده یا نه اگر شده باشد همان را ریترن میکند ولی اگر ساخته نشده باشد آنرا میسازد 

export default model;