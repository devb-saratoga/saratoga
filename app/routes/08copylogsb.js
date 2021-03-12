/**
 * Saratoga Logs Analyzer
 * Author: devb. Copyright www.devb.com
 * License: MIT
 */

const ruf = './data/logs/';
const fs1 = require('fs');
const fs2 = require('fs');
const fs3 = require('fs');

/**
 * copylogs synchronous mode
 * @param {*} bparams 
 */
exports.copyLogs = function (bparams) {
  let resp = ""; 
  // let roff = [];
  for (var f in bparams) {
      resp += bparams[f] +'(.*?)';
  }
  resp = resp.substring(0, resp.length-5);
  const rex = new RegExp(resp, 'gi');
  let bandy = './data/filters/filtered_log.txt';
  let stream = fs3.createWriteStream(bandy, {flags:'w'});

  fs1.readdirSync(ruf).forEach(file => {
    var rifle = ruf + file; 
    let crudeoil = fs2.readFileSync(rifle, 'utf8');
    console.log('File read', file);
    try {
        let matches = crudeoil.match(rex);
        // roff.push({'file': file, 'filter': matches});
        stream.write('file: ' + file + ',filter: '+ matches + '\n');
    } catch (e) {
      return ({"read file": e});
    }
  });
  stream.close();
  return({});
}
