const fs = require("fs");
const qs = require("querystring");

function handler(request, response) {
  response.writeHead(200, { "Content-Type": "text/html" });
  // response.write(message);
  // response.end();
  var endpoint = request.url;
  if (endpoint === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile(__dirname + "/../public/index.html", function(error, file) {
      if (error) {
        console.log(error);
        return;
      }
      response.end(file);
    });
  } else if (endpoint === "/main.css") {
    response.writeHead(200, { "Content-Type": "text/css" });
    fs.readFile(__dirname + "/../public/main.css", function(error, file) {
      if (error) {
        console.log(error);
        return;
      }
      response.end(file);
    });
  } else if (endpoint === "/img/image.jpg") {
    response.writeHead(200, { "Content-Type": "image/jpg" });
    fs.readFile(__dirname + "/../public/img/image.jpg", function(error, file) {
      if (error) {
        console.log(error);
        return;
      }
      response.end(file);
    });
  } else if (endpoint === "/create-post") {
    var allTheData = "";
    request.on("data", function(chunkOfData) {
      // do something
      allTheData += chunkOfData;
    });
    request.on("end", function() {
      var convertedData = qs.parse(allTheData);
      console.log(convertedData);
      console.log('/../public/index.html');
      response.writeHead(308, {'Location': '/'});
      console.log(response._header);
      response.end();
    });
  }
}

module.exports = handler;