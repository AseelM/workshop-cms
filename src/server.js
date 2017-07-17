const http = require('http');
const fs = require('fs');

const server = http.createServer(handler);
var message = "yaaay working with Bart for the 1st time! yiiippppy"

server.listen(3000, function(){
  console.log('server is listening on port 3000, and ready to receive requests!');
});
function handler(request, response) {
response.writeHead(200, {'Content-Type': 'text/html'} );
// response.write(message);
// response.end();
var endpoint = request.url;
if (endpoint === "/"){
  response.writeHead(200, {'Content-Type': 'text/html'} );
  fs.readFile(__dirname + "/../public/index.html", function(error, file) {
    if (error){
      console.log(error);
      return;
    }
    response.end(file);

  })
}
}

// }
// console.log(endpoint);
// var method = request.method;
// console.log(method);
// if (endpoint === "/node"){
//   response.write("node");
//   // response.end();
// }else if (endpoint === "/girls"){
//   response.write("girls");
//   // response.end();
// }else {
//   response.write("not an endpoint");
//   // response.end();
// }
// response.end();
// }
