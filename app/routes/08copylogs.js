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
 * version1 of copylogs
 * synchronous. Takes a long time
 * @param {*} bparams 
 */
exports.copyLogs = function (bparams) {
  let resp = ""; 
  let roff = [];
  for (var f in bparams) {
      resp += bparams[f] +'(.*?)';
  }
  resp = resp.substring(0, resp.length-5);
  const rex = new RegExp(resp, 'gi');
  fs1.readdirSync(ruf).forEach(file => {
    var rifle = ruf + file; 
    let crudeoil = fs2.readFileSync(rifle, 'utf8');
    console.log('File read', file);
    try {
        let matches = crudeoil.match(rex);
        roff.push({'file': file, 'filter': matches});
    } catch (e) {
      return ({"read file": e});
    }
  });
  try {
    let bandy = './data/filters/filtered_log.json';
    fs3.writeFile(bandy, JSON.stringify(roff), 'utf8', function (err) {
        if (err) {
            return console.log({"write file": err});
        }    
        console.log("The file was saved!", roff);
    }); 
    // console.log('file written');
  } catch (error) {
    return({"write file": error});
  }
  return({});
}
