/**
 * Saratoga Logs Analyzer
 * Author: devb. Copyright www.devb.com
 * License: MIT
 */

const ruf = './data/logs/';
const fs1 = require('fs');
const fs2 = require('fs');
const fs3 = require('fs');
const path = require("path");
var eggfoo = [];

exports.findInLogs = function (bparams) {
  eggfoo = [], resp = "";
  for (var f in bparams) {
      resp += bparams[f] +'(.*?)';
  }
  resp = resp.substring(0, resp.length-5);
  const rex = new RegExp(resp, 'gi');
  fs1.readdirSync(ruf).forEach(file => {
    let rifle = ruf + file; 
    let crudeoil = fs2.readFileSync(rifle, 'utf8');
    try {
        const matches = crudeoil.match(rex);
        eggfoo.push({"file": file, 'result': matches});
    } catch (e) {return ({e}); }
  });
  return(eggfoo);
}
