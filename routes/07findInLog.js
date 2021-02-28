/**
 * Saratoga Logs Analyzer
 * Author: devb. Copyright www.devb.com
 * License: MIT
 */

const ruf = './logs/';
const fs1 = require('fs');
const fs2 = require('fs');
const fs3 = require('fs');
var eggfoo = [], count = 0, filter1 = '', filter2 = '';

exports.findInLogs = function (bparams) {
  let filter1 = ''; eggfoo = []; count = 0;
  let resp = "";
  for (var f in bparams) {
      resp += bparams[f] +'(.*?)';
  }
  resp = resp.substring(0, resp.length-5);
  const rex = new RegExp(resp, 'gi');
  fs1.readdirSync(ruf).forEach(file => {
    var rifle = ruf + file;
    let crudeoil = fs2.readFileSync(rifle, 'utf8');
    try {
        const matches = crudeoil.match(rex);
        eggfoo.push({"file": file, 'result': matches});
    } catch (e) {
      return ({e});
    }
  });
  return(eggfoo);
}
