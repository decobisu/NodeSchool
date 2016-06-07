var fs = require('fs');
var buf = new Buffer(fs.readFileSync(process.argv[2]));
var str = buf.toString();
var splitString = str.split(/\r\n|\r|\n/);

console.log(splitString.length-1);
