/**
 * Saratoga Logs Analyzer
 * Author: devb. Copyright www.devb.com
 * License: MIT
 */

const ruf = './data/logs/';
const fs1 = require('fs');
const fs2 = require('fs');
const fs3 = require('fs');
var async = require('async');

/**
 * copyLogs error in code
 * not working
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
  var allfiles = [];
  var rifle = '';
  fs1.readdirSync(ruf).forEach(file => {
    rifle = ruf + file; 
    allfiles.push(rifle);
  });
  console.log('allfiles', allfiles);
  let bandy = './data/filters/filtered_log.txt';
  let stream = fs3.createWriteStream(bandy, {flags:'a'});

  async.eachSeries(
        // Pass items to iterate over
        allfiles,
        // Pass iterator function that is called for each item
        function(filename, cb) {
            let matches = '';
            console.log('reading file', filename);
            let crudeoil = fs2.readFileSync(filename, 'utf8');
            matches = crudeoil.match(rex);
            stream.write('file:' + filename + ',filter:'+ matches);
        },
        // Final callback after each item has been iterated over.
        function(err) {
            stream.close();
        }
    );
    return({});
}
