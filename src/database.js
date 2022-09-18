const mongoose  = require('mongoose');
import {MONGODB_URI} from './config'

(async()=>{
    try{
        const db = await mongoose.connect(MONGODB_URI)
        console.log('DB connected to',db.connection.name);
    }catch(error){
        console.log(error);
    }
})()