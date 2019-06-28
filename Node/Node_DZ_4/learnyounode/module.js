let fs = require('fs');
let path = require('path');

module.exports = function (dirName, extStr, cb) {
    let arr = [];

    fs.readdir(dirName, function callback(err, list) {
        if (err) {
            return cb(err);
        };
        for (let i = 0; i < list.length; i++) {
            let el = list[i];
            let elExt = path.extname(el);

            if (elExt === '.' + extStr) {
                arr.push(el);
            }
        };
        return cb(null, arr);

    });
};

/*   var fs = require('fs')
    var path = require('path')

    module.exports = function (dir, filterStr, callback) {
      fs.readdir(dir, function (err, list) {
        if (err) {
          return callback(err)
        }

        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })

        callback(null, list)
      })
    } */