let http = require('http');
let fs = require('fs');

let server = http.createServer(function (req, res) {
    let pathname = './data.txt';
    let arrNum = [];

    fs.readFile(pathname, 'utf8', (err, data) => {
        if (err) {
            console.log('Something gone wron with sourse file');
            return res.end(err);
        };
        let content = data.split(' ');
        for (let i = 0; i < content.length; i++) {
            let num = content[i];
            arrNum.push(num);

            let out1 = '';
            let out2 = '';

            for (let i = 0; i < arrNum.length; i++) {
                let num1 = arrNum[i];
                if (num1 % 2 === 0) {
                    out1 += num1 + ' ';
                }
            };

            for (let i = 0; i < arrNum.length; i++) {
                let num2 = arrNum[i];
                out2 += num2 ** 3 + ' ';
            };

            fs.writeFile('./out-1.txt', out1, (err) => {
                if (err) {
                    console.log('Something gone wron with out-1 file');
                    return res.end(err);
                }
                console.log('The file out-1 has been saved!');
            });

            fs.writeFile('./out-2.txt', out2, (err) => {
                if (err) {
                    console.log('Something gone wron with out-2 file');
                    return res.end(err);
                }
                console.log('The file out-2 has been saved!');
            });

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end("Done");
        }

    });
});
server.listen(80, () => {
    console.log('HTTP server is listening on 80 port');
});