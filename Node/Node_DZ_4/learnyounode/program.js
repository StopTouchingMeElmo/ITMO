/* Задача 1 */
/*  Write a program that prints the text "HELLO WORLD" to the console
  (stdout). */

/* console.log('HELLO WORLD'); */

/* Задача 2 */
/*  Write a program that accepts one or more numbers as command-line arguments
  and prints the sum of those numbers to the console (stdout). */

/* let sum = 0;
for (let i = 2; i < process.argv.length; i++) {
    sum += Number(process.argv[i]);
};

console.log(sum); */

/* Задача 3 */
/*  Write a program that uses a single synchronous filesystem operation to
  read a file and print the number of newlines (\n) it contains to the
  console (stdout), similar to running cat file | wc -l.

  The full path to the file to read will be provided as the first
  command-line argument (i.e., process.argv[2]). You do not need to make
  your own test file.*/

/* let file = process.argv[2];
let fs = require('fs');
let buf = fs.readFileSync(file);
let str = buf.toString();
let arr = str.split('\n');
let numOfnew = arr.length - 1;

console.log(numOfnew); */

//Here's the official solution
/*  var fs = require('fs')

    var contents = fs.readFileSync(process.argv[2])
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)

    // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1 */

/* Задача 4 */

/* MY FIRST ASYNC I/O! (Exercise 4 of 13)

Write a program that uses a single asynchronous filesystem operation to
read a file and print the number of newlines it contains to the console
(stdout), similar to running cat file | wc -l.

The full path to the file to read will be provided as the first
command-line argument. */

/* let file = process.argv[2];
let fs = require('fs');

fs.readFile(file, 'utf-8', function callback(err, data) {
    if (err) {
        return err
    };

    let arr = data.split('\n');
    let numOfnew = arr.length - 1;

    console.log(numOfnew);
}); */


// Here's the official solution
/*  var fs = require('fs')
    var file = process.argv[2]

    fs.readFile(file, function (err, contents) {
      if (err) {
        return console.log(err)
      }
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    }) */

/* Задача 5 */

/* FILTERED LS (Exercise 5 of 13)

  Create a program that prints a list of files in a given directory,
  filtered by the extension of the files. You will be provided a directory
  name as the first argument to your program (e.g. '/path/to/dir/') and a
  file extension to filter by as the second argument.

  For example, if you get 'txt' as the second argument then you will need to
  filter the list to only files that end with .txt. Note that the second
  argument will not come prefixed with a '.'.

  Keep in mind that the first arguments of your program are not the first
  values of the process.argv array, as the first two values are reserved for
  system info by Node.

  The list of files should be printed to the console, one file per line. You
  must use asynchronous I/O. */

/* let fs = require('fs');
let path = require('path');
let dir = process.argv[2];
let ext = process.argv[3];

fs.readdir(dir, function callback(err, list) {
    if (err) {
        return console.log(err)
    };
    for (let i = 0; i < list.length; i++) {
        let el = list[i];
        let elExt = path.extname(el);

        if (elExt === '.' + ext) {
            console.log(el);
        }
    };
}); */


// Here's the official solution
/* var fs = require('fs')
    var path = require('path')

    var folder = process.argv[2]
    var ext = '.' + process.argv[3]

    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    }) */

/* Задача 6 */
/*  */
/* let mymodule = require('./module.js');

let dir = process.argv[2];
let ext = process.argv[3];

let callback = function (err, data) {
  if (err) {
    console.log(err);
  }
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
};
mymodule(dir, ext, callback); */

//learnyounode:

/* var filterFn = require('./solution_filter.js')
    var dir = process.argv[2]
    var filterStr = process.argv[3]

    filterFn(dir, filterStr, function (err, list) {
      if (err) {
        return console.error('There was an error:', err)
      }

      list.forEach(function (file) {
        console.log(file)
      })
    }) */

/* Задача 7 */

/* HTTP CLIENT (Задача 7 из 13)

  Реализуйте программу, которая посылает HTTP GET запрос на URL, который вы
  получите в качестве первого аргумента командной строки. Выведите
  содержимое каждого события "data" из ответа (response) построчно в консоль
  (stdout).  */

/* let http = require('http');
let urlAddress = process.argv[2];

http.get(urlAddress, function callback(response) {
  response.setEncoding('utf8');
  response.on('data', function (data) {
    console.log(data);
  });
}); */

/*  learnyounode:

─────────────────────────────────────────────────────────────────────────────

    var http = require('http')

    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    }).on('error', console.error) */

/* Задача 8 */
/*  HTTP COLLECT (Задача 8 из 13)

  Реализуйте программу, которая посылает HTTP GET запрос на URL, который вы
  получите в качестве первого аргумента командной строки. Соберите все
  данные с сервера (не только первое событие "data") и выведите две строки в
  консоль (stdout).

  Первая строка должна содержать количество символов, полученных с сервера.
  А вторая должна непостредственно вывести эти символы. */

/* let http = require('http');
let urlAddress = process.argv[2];
let allData = '';

http.get(urlAddress, function callback(response) {
  response.setEncoding('utf8');
  response.on('data', function (data) {
    allData += data;
  });
  response.on('end', function () {
    console.log(allData.length);
    console.log(allData);
  });
}); */

/* learnyounode:

─────────────────────────────────────────────────────────────────────────────

    var http = require('http')
    var bl = require('bl')

    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })

────────────── */

/* Задача 9 */
/* JUGGLING ASYNC (Задача 9 из 13)

  Эта задание похоже на предыдущее (HTTP COLLECT) тем, что Вам снова
  придется использовать http.get(). Но в этот раз, Вы получите три адреса
  (URL) в качестве трех первых аргументов командной строки.

  Соберите контент с каждого адреса, который получите, и выведите его в
  консоль (stdout). Не нужно выводить общее количество полученных данных,
  просто выведите содержимое каждого адреса на новой строке. Учтите, что Вы
  должны вывести содержимое в том порядке, в каком Вы получили адреса. */

/* let http = require('http');
let urlAddress1 = process.argv[2];
let urlAddress2 = process.argv[3];
let urlAddress3 = process.argv[4];

let content1 = '';
let content2 = '';
let content3 = '';

http.get(urlAddress1, function callback(response) {
  response.setEncoding('utf8');
  response.on('data', function (data) {
    content1 += data;
  });
  response.on('end', function () {
    console.log(content1);

    http.get(urlAddress2, function callback(response) {
      response.setEncoding('utf8');
      response.on('data', function (data) {
        content2 += data;
      });
      response.on('end', function () {
        console.log(content2);

        http.get(urlAddress3, function callback(response) {
          response.setEncoding('utf8');
          response.on('data', function (data) {
            content3 += data;
          });
          response.on('end', function () {
            console.log(content3);
          });
        });
      });
    });
  });
}); */

/*  learnyounode:

─────────────────────────────────────────────────────────────────────────────

    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0

    function printResults () {
      for (var i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }

          results[index] = data.toString()
          count++

          if (count === 3) {
            printResults()
          }
        }))
      })
    }

    for (var i = 0; i < 3; i++) {
      httpGet(i)
    }

────────────────────────────────── */

/* Задача 10 */

/* TIME SERVER (Задача 10 из 13)

  Реализуйте TCP сервер, возвращающий текущее время при соединении.

  Ваш сервер должен ожидать TCP соединений на порту, который Вы получите в
  качестве первого аргумента командной строки. На каждое новое соединение
  сервер должен возвращать текущую дату и время в формате:

     "YYYY-MM-DD hh:mm"

  В конце строки с именем обязательно должен быть символ переноса строки.
  Месяцы, дни, часы и минуты должны быть двучисленными, например:

     "2013-07-06 17:42" */

/* let myPort = process.argv[2];
let net = require('net');

let d = new Date();
let year = d.getFullYear();
let month = d.getMonth() + 1;
if (month < 10) {
  month = '0' + month;
};
let day = d.getDate();
if (day < 10) {
  day = '0' + day;
};
let hour = d.getHours();
if (hour < 10) {
  hour = '0' + hour;
};
let minute = d.getMinutes();
if (minute < 10) {
  minute = '0' + minute;
};

let currentDateTime = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + '\n';

let server = net.createServer(function listener(socket) {
  socket.end(currentDateTime);
});
server.listen(myPort); */

/*  learnyounode:

─────────────────────────────────────────────────────────────────────────────

    var net = require('net')

    function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }

    function now () {
      var d = new Date()
      return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }

    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })

    server.listen(Number(process.argv[2]))

────────────────────────────────── */

/* Задача 11 */

/*  HTTP FILE SERVER (Задача 11 из 13)

  Реализуйте HTTP сервер, который отдает одинаковый файл для всех входящих
  запросов.

  Сервер должен слушать порт, который будет передан в качестве первого
  аргумента командной строки.

  Файл, который нужно возвращать, будет передан в качестве второго аргумента
  командной строки. Вы должны использовать fs.createReadStream() метод для
  отдачи содержимого файла. */

/* let myPort = process.argv[2];
let myFile = process.argv[3];

let http = require('http');
let fs = require('fs');

let server = http.createServer(function callback(req, res) {
  let readStr = fs.createReadStream(myFile);
  readStr.pipe(res);
});
server.listen(myPort); */

/*  learnyounode:

─────────────────────────────────────────────────────────────────────────────

    var http = require('http')
    var fs = require('fs')

    var server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })

      fs.createReadStream(process.argv[3]).pipe(res)
    })

    server.listen(Number(process.argv[2]))

───────────────────────────────────────────── */

/* Задача 12 */
/*  HTTP UPPERCASERER (Задача 12 из 13)

  Реализуйте HTTP сервер который принимает только POST запросы и
  конвертирует все символы тела запроса в верхний регистр и возвращает их
  клиенту.

  Ваш сервер должен слушать порт, который Вы получите в качестве первого
  аргумента командной строки. */

/* let myPort = process.argv[2];
let http = require('http');
let map = require('through2-map');

let server = http.createServer(function (req, res) {
  if (req.method === 'POST') {

    req.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(res);
  }
});

server.listen(myPort); */

/*  learnyounode:

─────────────────────────────────────────────────────────────────────────────

    var http = require('http')
    var map = require('through2-map')

    var server = http.createServer(function (req, res) {
      if (req.method !== 'POST') {
        return res.end('send me a POST\n')
      }

      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })

    server.listen(Number(process.argv[2]))

───────────────────── */

/* Задача 13 */
/*  HTTP JSON API SERVER (Задача 13 из 13)

  Реализуйте HTTP сервер, который возвращает JSON объект на GET запрос по
  адресу /api/parsetime. Запрос должен содержать в строке запроса ключ 'iso'
  и время в ISO-формате в качестве значения. */

let myPort = process.argv[2];
let http = require('http');
let url = require('url');

let server = http.createServer(function (req, res) {
  if (req.method === 'GET') {

    let parsedUrl = url.parse(req.url, true);
    let path = parsedUrl.path;

    let d = new Date(parsedUrl.query.iso)

    if (path.indexOf('parsetime') >= 0) {
      let result = {
        hour: d.getHours(),
        minute: d.getMinutes(),
        second: d.getSeconds()
      }
      res.end(JSON.stringify(result));
    };

    if (path.indexOf('unixtime') >= 0) {
      let result2 = {
        unixtime: d.getTime()
      };
      res.end(JSON.stringify(result2));
    };

    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
  }
});
server.listen(myPort);

/*  learnyounode:

─────────────────────────────────────────────────────────────────────────────

    var http = require('http')
    var url = require('url')

    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }

    function unixtime (time) {
      return { unixtime: time.getTime() }
    }

    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result

      if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
      } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
      }

      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))

─────────────────────────────────────────────────────────────────────────────
 Вы решили все задачи! Ура!

─────────────────────────────── */