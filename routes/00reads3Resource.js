let AWS = require('aws-sdk');
let fs = require("fs");

AWS.config.update({
    region: "us-west-2",
});
var s3 = new AWS.S3();

async function readS3(sobject) {
    return new Promise(
        (resolve, reject) => {
            var s3params = {
                Bucket: "ucsd-elk",
                MaxKeys: 1000
            };
            var allObjects = [];
            s3.listObjectsV2(s3params, function (s3ListErr, s3listData) {
                var regxFileReader = /(?:\.([^.]+))?$/;
                if (s3ListErr) {
                    console.log('listObjectsV2', s3ListErr, s3ListErr.stack);
                    reject(s3ListErr);
                } else {
                    // console.log(data);
                    var listContents = s3listData.Contents;
                    for (var i = 0; i < listContents.length; i++) {
                        var filename = listContents[i].Key;
                        var newParams = {};
                        var ext = regxFileReader.exec(filename)[1];
                        if (ext == "gz" || ext == "json") {
                            newParams.Bucket = "ucsd-elk";
                            newParams.Key = filename;
                            // newParams.Range = "bytes=0-9";
                            allObjects.push(newParams);
                            // console.log(newParams);    
                        }
                    }
                    resolve (allObjects);
                }
            })
        })
}

exports.reads3Resource = function (bparams) {
    readS3()
    .then ( (result) => fs.writeFileSync('logobjects.json', JSON.stringify(result, null, 2)));
}