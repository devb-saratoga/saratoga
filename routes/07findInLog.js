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
  if (bparams.filter1 != undefined) filter1 = bparams.filter1;
  if (filter1 == '') filter1 = 'userName';
  if (bparams.filter2 != undefined) filter2 = bparams.filter2;
  if (filter2 == '') filter2 = 'userName';
  fs1.readdirSync(ruf).forEach(file => {
    var rifle = ruf + file;
    let crudeoil = fs2.readFileSync(rifle, 'utf8');
    try {
        const rex = new RegExp(filter1+'(.*?)'+filter2, 'gi');
        const matches = crudeoil.match(rex);

        eggfoo.push({"file": file, 'result': matches});
    } catch (e) {
      return ({e});
    }
  });
  return(eggfoo);
}
