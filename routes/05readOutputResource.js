/**
 * Saratoga Logs Analyzer
 * Author: devb. Copyright www.devb.com
 * License: MIT
 */

 const outFolder = './output/';
const fs1 = require('fs');
const fs2 = require('fs');
const fs3 = require('fs');
var users = [];
var count = 0;
var searchFor = '';

exports.readOutputResource = function (bparams) {
  searchFor = '';
  users = [];
  count = 0;
  if (bparams.search != undefined) searchFor = bparams.search;
  if (searchFor == '') searchFor = 'userName';
  console.log('Searching for ', searchFor);
  fs1.readdirSync(outFolder).forEach(file => {
    var rfile = outFolder + file;
    // console.log(rfile);
    let logCrude = fs2.readFileSync(rfile, 'utf8');
    try {
      let logData = JSON.parse(logCrude);
      // console.log(logData.length);  
      traverse(logData,process1);
    } catch (e) {
      return ({e});
    }
  });
  return(users);
}

function traverse(o,func) {
  for (var i in o) {
      func.apply(this,[i,o[i]]);  
      if (o[i] !== null && typeof(o[i])=="object") {
          //going one step down in the object tree!!
          traverse(o[i],func);
      }
  }
}

function process1(key,value) {
  // console.log(key, value);
  if (key == searchFor) {
    // if (value == "jit.b") count++;
    if (users.length <= 0) {
      users.push({"key":value, "value":1});
    } 
    var found = false; 
    for (var i=0; i < users.length; i++) {
      var nm = users[i].key;
      var ct = users[i].value;
      if (value === nm) {
        ct++;
        users[i].value = ct;
        found = true; 
      } 
    }
    if (!found) {
      users.push ({"key":value, "value":1});
      found = false;
    }
  }
}

