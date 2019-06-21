/* Задача 1 */
/* const http = require('http');
const server = http.createServer((request, response) => {
    console.log('HTTP works');
});
server.listen(8080); */

/* Задача 2 */

/* const http = require('http');
http.createServer((request, response) => {
    console.log('HTTP works!');
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.write('<h1>Hello</h1>');
    response.end();
}).listen(8080); */

const http = require('http');
http.createServer((request, response) => {
    console.log('HTTP works!');
    response.writeHead(404, {
        'Content-Type': 'text/html'
    });
    response.write('<h1>Page Not Found Error 404</h1>');
    response.end();
}).listen(8080);