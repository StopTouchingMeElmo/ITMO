/* Задача №3 */

/* const http = require('http');
const fs = require('fs');
const filename = 'index.html';

http.createServer((request, response) => {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.log('Could not find or open file for reading\n');
            response.statusCode = 404;
            response.end();
        } else {
            console.log('The file ${filename} is read and sent to the client\n');
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.end(data);
        }
    });
    console.log('Request accepted');
}).listen(8080, () => {
    console.log('HTTP server works in 8080 port!\n');
}); */

const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {

    let header = 'header.html';
    let body = 'body.html';
    let footer = 'footer.html';

    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    fs.readFile(header, 'utf8', (err, data) => {
        if (err) {
            console.log('Could not find or open file for reading\n');
            response.statusCode = 404;
            response.end();
        } else {
            console.log('The file header.html is read and sent to the client\n');
            response.write(data);

            fs.readFile(body, 'utf8', (err, data) => {
                if (err) {
                    console.log('Could not find or open file for reading\n');
                    response.statusCode = 404;
                    response.end();
                } else {
                    console.log('The file body.html is read and sent to the client\n');
                    response.write(data);

                    fs.readFile(footer, 'utf8', (err, data) => {
                        if (err) {
                            console.log('Could not find or open file for reading\n');
                            response.statusCode = 404;
                            response.end();
                        } else {
                            console.log('The file footer.html is read and sent to the client\n');
                            response.end(data);
                        }
                    });
                }
            });
        }
    });

    // рабочий краткий вариант, но без очередности вывода контента файлов

    /* response.writeHead(200, {
            "Content-Type": "text/html"
        });


        let count = 0;
        let handler = function (error, content) {
            count++;
            if (error) {
                console.log(error);
            } else {
            response.write(content);

            }

            if (count == 3) {
                response.end();
            }

        } */

    /* fs.readFile('header.html', handler);
    fs.readFile('body.html', handler);
    fs.readFile('footer.html', handler);
 */
    console.log('Request accepted');
}).listen(8080, () => {
    console.log('HTTP server works in 8080 port!\n');
});