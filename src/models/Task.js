const mongoose = require('mongoose');
const {Schema} = mongoose;

const task = new Schema({
    title: {type: String, required: true, unique: true,trim: true},
    description: {type:String,required:true},
    done: {type:Boolean,defaultValue:false}
},{
    timestamps: true,
    versionKey: false
}

)
 


module.exports = mongoose.model('Task',task)