const http = require('http'); //http module
const fileSystem = require('fs'); //file system module

const hostname = '127.0.0.1';
const port = 3000;

fileSystem.readFile('index.html', (err, html) => {
  if(err){
    throw err;
  }
  const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-type', 'text/html');
    response.write(html)
    response.end();
  });

  server.listen(port, hostname, () => {
    console.log("Server started on port no. " + port);
  });
});
