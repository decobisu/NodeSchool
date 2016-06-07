var fs = require('fs');

//fs.readFile('ファイルのパス','フォーマット',''
fs.readFile(process.argv[2], 'utf-8', function callback(err, data) {
    var str = data.split('\n').length-1;
    console.log(str);
  });
