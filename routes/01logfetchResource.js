/**
 * Saratoga Logs Analyzer
 * Author: devb. Copyright www.devb.com
 * License: MIT
 */

 let AWS = require('aws-sdk');
let fs = require("fs");
let fs1 = require("fs");

AWS.config.update({
    region: "us-east-1",
});

var s3 = new AWS.S3();

/**
 * function: getS3
 * @param {*} sobject 
 */
async function getS3(sobject) {
    return new Promise(
        (resolve, reject) => {
            let paramsData = JSON.parse(fs.readFileSync('logobjects.json', 'utf8'));
            for (var i = 0; i <paramsData.length; i++) {
                let newParams = paramsData[i];
                s3.getObject(newParams, function (oerr, odata) {
                    if (oerr) console.log(oerr, oerr.stack);
                    else {
                        var fullPath = newParams.Key; 
                        var newFilename = fullPath.replace(/^.*[\\\/]/, '')
                        console.log(newFilename);
                        fs1.writeFileSync('files/'+newFilename, odata.Body, (nerr) => {
                            if (nerr) throw nerr;
                            console.log(newFilename, ' file has been saved!');
                        });
                    }
                })
            }
        })
}

exports.logfetchResource = function (bparams) {
    getS3()
    .then ( (result) => console.log('Result', result))
}
