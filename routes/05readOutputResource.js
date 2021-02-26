/**
 * Saratoga Logs Analyzer
 * Author: devb. Copyright www.devb.com
 * License: MIT
 */

const oof = './logs/';
const fs1 = require('fs');
const fs2 = require('fs');
const fs3 = require('fs');
var users = [], count = 0, sft = '';

exports.readOutputResource = function (bp) {
  sft = ''; users = []; count = 0;
  if (bp.search != undefined) sft = bp.search;
  if (sft == '') sft = 'userName';
  fs1.readdirSync(oof).forEach(file => {
    var rtail = oof + file;
    let lcd = fs2.readFileSync(rtail, 'utf8');
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

function rainer(aaa, bbb) {
  if (aaa == sft) {
    if (users.length <= 0) {
      users.push({"key":bbb, "value":1});
    } 
    var found = false; 
    for (var i=0; i < users.length; i++) {
      var nm = users[i].key;
      var ct = users[i].value;
      if (bbb === nm) {
        ct++;
        users[i].value = ct;
        found = true; 
      } 
    }
    if (!found) {
      users.push ({"key":bbb, "value":1});
      found = false;
    }
  }
}

