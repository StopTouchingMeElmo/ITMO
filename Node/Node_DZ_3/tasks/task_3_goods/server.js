let http = require("http");
let fs = require("fs");
let path = require("path");

let mimeTypes = {
    ".js": "text/javascript",
    ".html": "text/html",
    ".css": "text/css",
    ".jpg": "image/jpeg",
    ".gif": "image/gif",
    ".png": "image/png",
    ".json": "application/json",
    ".ico": "image/x-icon"
};

let server = http.createServer((req, res) => {
    let pathname, extname, mimeType;
    console.log("Request: " + req.url);
    if (req.url === '/') {
        pathname = './product.html';
    } else {
        pathname = './' + req.url;
    }
    extname = path.extname(pathname);
    mimeType = mimeTypes[extname];
    if (extname === ".jpg" || extname === ".gif" || extname === ".png" || extname === ".ico" ) {
        fs.readFile(pathname, null, (err, data) => {
            if (err) {
                console.log('Could not find or open file for reading\n');
                res.statusCode = 404;
                res.end();
            } else {
                console.log(`The file ${pathname} is read and sent to the client\n`);
                res.writeHead(200, {
                    'Content-Type': mimeType
                });
                res.end(data);
            }
        });
    } else {
        fs.readFile(pathname, 'utf8', (err, data) => {
            if (err) {
                console.log('Could not find or open file for reading\n');
                res.statusCode = 404;
                res.end();
            } else {
                console.log(`The file ${pathname} is read and sent to the client\n`);
                res.writeHead(200, {
                    'Content-Type': mimeType
                });
                res.end(data);
            }
        });
    }

});
server.listen(8080, () => {
    console.log('HTTP server works in 8080 port!');
});