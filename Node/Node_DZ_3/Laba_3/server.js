/* Задача № 1 */

/* a)Необходимо создать http сервер (скрипт server.js) который отдает страницу en.html в случае
старта сервера с дополнительным параметром en
>node server.js en
и страницу ru.html в случае вызова
>node server.js ru  */

/* let http = require('http');
let fs = require('fs');

http.createServer((request, response) => {
    let pathname;
    console.log("Request: " + request.url);
    if (request.url === '/' && process.argv[2] === 'ru') {
        pathname = 'ru.html';
    } else if (request.url === '/' && process.argv[2] === 'en') {
        pathname = 'en.html';
    } else {
        pathname = 'en.html';
    }
    fs.readFile(pathname, 'utf8', (err, data) => {
        if (err) {
            console.log('Could not find or open file for reading\n');
            response.statusCode = 404;
            response.end();
        } else {
            console.log(`The file ${pathname} is read and sent to the client\n`);
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.end(data);
        }
    });
}).listen(80, () => {
    console.log("HTTP server works in 80 port!\n");
}); */

/* b) Переписать скрипт таким образом, чтобы локаль (ru или en) бралась из переменной среды
окружения LANG. В случае ее отсутствия ее нужно установить из командной строки
для Windows
set LANG=ru_RU
для Linux
export LANG=ru_RU */

/* let http = require('http');
let fs = require('fs');
http.createServer((request, response) => {
    let pathname;
    console.log("Request: " + request.url);
    if (request.url === '/' && process.env.LANG === 'ru_RU') {
        pathname = 'ru.html';
    } else {
        pathname = 'en.html';
    }
    fs.readFile(pathname, 'utf8', (err, data) => {
        if (err) {
            console.log('Could not find or open file for reading\n');
            response.statusCode = 404;
            response.end();
        } else {
            console.log(`The file ${pathname} is read and sent to the client\n`);
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.end(data);
        }
    });
}).listen(80, () => {
    console.log("HTTP server works in 80 port!\n");
}); */

/* Задача № 2 */

const cp = require('child_process');
const child = cp.fork('./child.js');
const http = require('http');

http.createServer((request, response) => {
    let obj = {
        method: request.method, //свойство хранит http метод присланного запроса
        params: request.url //свойство хранит url присланного запроса
    };

    child.send(obj);

    response.statusCode = 200;
    response.end();
}).listen(8080, () => {
    console.log('Server run in 8080 port!');
});

/* Задача № 3 */

//смотри в папке new_app с комментариями в файле server.js