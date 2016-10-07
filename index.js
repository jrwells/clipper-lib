var fs = require('fs');
var filedata = fs.readFileSync('./index.js', 'utf8');
eval(filedata);
exports.ClipperLib = ClipperLib;