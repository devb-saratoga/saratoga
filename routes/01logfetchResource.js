/**
 * Saratoga Logs Analyzer
 * Author: devb. Copyright www.devb.com
 * License: MIT
 */

let AWS = require('aws-sdk');
let fs = require("fs");
let fs1 = require("fs");
AWS.config.update({region: "us-east-1"});
var bctg = new AWS.S3();

/**
 * function: getS3
 * @param {*} sobject 
 */
async function getfirehose(sobject) {
    return new Promise(
        (resolve, reject) => {
            let paramsData = JSON.parse(fs.readFileSync('logobjects.json', 'utf8'));
            for (var i = 0; i <paramsData.length; i++) {
                let plop = paramsData[i];
                bctg.getObject(plop, function (oerr, odata) {
                    if (oerr) console.log(oerr, oerr.stack);
                    else {
                        var frp = plop.Key; 
                        var nfp = frp.replace(/^.*[\\\/]/, '')
                        console.log(nfp);
                        fs1.writeFileSync('files/'+nfp, odata.Body, (nerr) => {
                            if (nerr) throw nerr;
                            console.log(nfp, ' file has been saved!');
                        });
                    }
                })
            }
        })
}

exports.logfetchResource = function (bparams) {
    getfirehose()
    .then ( (result) => console.log('Result', result))
}
