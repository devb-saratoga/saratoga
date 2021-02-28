let filter1 = ''; eggfoo = []; count = 0;
let bparams = {"f1":"abc", "f2":"def", "f3": "ghi"};
let resp = "";
for (var f in bparams) {
    resp += bparams[f] +'(.*?)';
}
resp = resp.substring(0, resp.length-5);
console.log(resp);