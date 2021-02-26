/**
 * Saratoga Logs Analyzer
 * Author: devb. Copyright www.devb.com
 * License: MIT
 */

const oof = './logs/';
const fs1 = require('fs');
const fs2 = require('fs');
const fs3 = require('fs');
var users = [], count = 0, searchFor = '';

exports.readOutputResource = function (bparams) {
  searchFor = ''; users = []; count = 0;
  if (bparams.search != undefined) searchFor = bparams.search;
  if (searchFor == '') searchFor = 'userName';
  console.log('Searching for ', searchFor);
  fs1.readdirSync(oof).forEach(file => {
    var rfile = oof + file;
    let lcd = fs2.readFileSync(rfile, 'utf8');
    try {
      let dlw = JSON.parse(lcd);
      grainer(dlw,rainer);
    } catch (e) {
      return ({e});
    }
  });
  return(users);
}

function grainer(o,func) {
  for (var i in o) {
      func.apply(this,[i,o[i]]);  
      if (o[i] !== null && typeof(o[i])=="object") {
          grainer(o[i],func);
      }
  }
}

function rainer(key,value) {
  if (key == searchFor) {
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

