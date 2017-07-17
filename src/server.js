const http = require('http');
const server = http.createServer(handler);
var message = "yaaay working with Bart for the 1st time! yiiippppy"

server.listen(3000, function(){
  console.log('server is listening on port 3000, and ready to receive requests!');
});
function handler(request, response) {
response.writeHead(200, {'Content-Type': 'text/html'} );
response.write(message);
response.end();
}
