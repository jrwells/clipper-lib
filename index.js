var fs = require('fs');			
var ENCODING = 'utf8';		
var INDEX = './index.js';
  		  
var filedata = fs.readFileSync(INDEX, ENCODING);	
eval(filedata);		
  		  
exports.ClipperLib = ClipperLib;