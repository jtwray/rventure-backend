const server = require('./api/server.js')
require('dotenv').config()

const developmentEnvironment = process.env.DEV_ENV || 'development';
const port = process.env.PORT || 8002;
let consoleMessage = '';

if (developmentEnvironment === 'production') { consoleMessage = `\n== API's UP amigo ${port} ==`; }
if (developmentEnvironment === ('development' || 'local')) {
    consoleMessage = `\n== API's UP amigo ${port} ==\n <a href='http://localhost:${port}'>open in browser</a>`;
}
server.listen(port, () => console.log(consoleMessage));
