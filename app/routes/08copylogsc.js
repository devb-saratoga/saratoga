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
 * copyLogs function async
 * @param {} bparams 
 */
exports.copyLogs = function (bparams) {
  let resp = "";
  let allfiles = [];
  for (var f in bparams) {
      resp += bparams[f] +'(.*?)';
  }
  resp = resp.substring(0, resp.length-5);
  const rex = new RegExp(resp, 'gi');
  fs1.readdirSync(ruf).forEach(file => {
    rifle = ruf + file; 
    allfiles.push(rifle);
  });
  console.log('allfiles', allfiles);
  let bandy = './data/filters/filtered_log.txt';
  let stream = fs3.createWriteStream(bandy, {flags:'w'});

  async.eachSeries(
    // Pass items to iterate over
    allfiles,
    // Pass iterator function that is called for each item
    function(file, cb) {
//        var rifle = ruf + file; 
        fs2.readFile(file, 'utf8', function(err, crudeoil) {
            if (!err) {
                console.log('File read', file);
                let matches = crudeoil.match(rex);
                stream.write('file: ' + file + ',filter: '+ matches + '\n');       
            }
            cb(err);
        });
    },
    function(err) {
        stream.close();
        return({});
    }
  );
}
