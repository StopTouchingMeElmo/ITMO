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
let mymodule = require('./module.js');

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
mymodule(dir, ext, callback);

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