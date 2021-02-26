/**
 * Saratoga Logs Analyzer
 * Author: devb. Copyright www.devb.com
 * License: MIT
 */

 let zlib = require('zlib');
let fs = require("fs");
let fs1 = require("fs");

/**
 * Decode Gzip files
 */
async function decodeGz() {
    return new Promise(
        (resolve, reject) => {
            let paramsData = JSON.parse(fs.readFileSync('logobjects.json', 'utf8'));
            var unzip = zlib.createGunzip();
            for (var i = 0; i < 50 /*paramsData.length*/; i++) {
                let newParams = paramsData[i];
                var fullPath = newParams.Key; 
                var newFilename = fullPath.replace(/^.*[\\\/]/, '');
                var outName = newFilename.substring(0, newFilename.lastIndexOf('.gz'));
                var inp = fs1.createReadStream('files/'+newFilename);
                var out = fs1.createWriteStream('decode/'+outName);
                inp.pipe(unzip).pipe(out);
            }
        })
}

exports.logtransformResource = function (bparams) {
    decodeGz()
        .then((result) => console.log('Result', result))
}
