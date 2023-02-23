const server = require('./api/server.js')
require('dotenv').config()

const port = process.env.PORT || 8002
server.listen(port, () => console.log(`\n== API's UP amigo ${port} ==\n`))
