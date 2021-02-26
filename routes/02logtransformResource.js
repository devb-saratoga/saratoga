/**
 * Saratoga Logs Analyzer
 * Author: devb. Copyright www.devb.com
 * License: MIT
 */

let zigle = require('zlib');
let fs = require("fs");
let fs1 = require("fs");

/**
 * Decode Gzip files
 */
async function dgz() {
    return new Promise(
        (resolve, reject) => {
            let dff = JSON.parse(fs.readFileSync('logobjects.json', 'utf8'));
            var uzp = zigle.createGunzip();
            for (var i = 0; i < 50 /*paramsData.length*/; i++) {
                let dft = dff[i];
                var fft = dft.Key; 
                var nft = fft.replace(/^.*[\\\/]/, '');
                var oft = nft.substring(0, nft.lastIndexOf('.gz'));
                var ift = fs1.createReadStream('files/'+nft);
                var ott = fs1.createWriteStream('decode/'+oft);
                ift.pipe(uzp).pipe(ott);
            }
        })
}

exports.logtransformResource = function (bparams) {
    dgz()
        .then((result) => console.log('Result', result))
}
