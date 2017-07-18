const http = require("http");
const handler = require('./handlers.js');

const server = http.createServer(handler);
var message = "yaaay working with Bart for the 1st time! yiiippppy";

server.listen(3000, function() {
  console.log(
    "server is listening on port 3000, and ready to receive requests!"
  );
});


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
