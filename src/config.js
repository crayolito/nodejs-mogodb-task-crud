
const  {config} = require('dotenv')
config()

export const  MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/test'
