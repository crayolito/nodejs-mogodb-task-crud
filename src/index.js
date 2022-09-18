import {PORT} from "./config"
import app from "./app"
require("./database");


app.listen(PORT)
console.log('Server on port',PORT);