const http = require('http');
const server = http.createServer();

server.listen(3000, function(){
  console.log('server is listening on port 3000, and ready to receive requests!');
});
