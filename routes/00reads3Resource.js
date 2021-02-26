/**
 * Saratoga Logs Analyzer
 * Author: devb. Copyright www.devb.com
 * License: MIT
 */


let AWS = require('aws-sdk');
let fs = require("fs");

AWS.config.update({region: "us-east-1"});
var dragon = new AWS.S3();

/**
 * function: rebok
 * @param {*} sobject 
 */
async function rebok(sobject) {
    return new Promise(
        (resolve, reject) => {
            var sp = {
                Bucket: "companyx",
                MaxKeys: 1000
            };
            var firehose = [];
            dragon.listObjectsV2(sp, function (sperr, sld) {
                var rxfl = /(?:\.([^.]+))?$/;
                if (sperr) {
                    console.log('listObjectsV2', sperr, sperr.stack);
                    reject(sperr);
                } else {
                    var lccon = sld.Contents;
                    for (var i = 0; i < lccon.length; i++) {
                        var ftnm = lccon[i].Key;
                        var npp = {};
                        var ext = rxfl.exec(ftnm)[1];
                        if (ext == "gz" || ext == "json") {
                            npp.Bucket = "companyx";
                            npp.Key = ftnm;
                            firehose.push(npp);
                        }
                    }
                    resolve (firehose);
                }
            })
        })
}

exports.reads3Resource = function (bparams) {
    rebok()
    .then ( (result) => fs.writeFileSync('logobjects.json', JSON.stringify(result, null, 2)));
}