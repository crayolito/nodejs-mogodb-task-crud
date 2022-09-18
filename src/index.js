import {PORT} from "./config"
import app from "./app"
require("./database");


app.listen(process.env.PORT || 5000)
console.log('Server on port',PORT);