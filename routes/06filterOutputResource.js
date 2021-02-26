/**
 * Saratoga Logs Analyzer
 * Author: devb. Copyright www.devb.com
 * License: MIT
 */

const ruf = './logs/';
const fs1 = require('fs');
const fs2 = require('fs');
const fs3 = require('fs');
var eggfoo = [], count = 0, searchFor = '';

exports.filterOutputResource = function (bparams) {
  searchFor = ''; valueFor = ''; eggfoo = []; count = 0;
  if (bparams.search != undefined) searchFor = bparams.search;
  if (searchFor == '') searchFor = 'userName';
  if (bparams.filter != undefined) valueFor = bparams.filter;
  console.log('Filtering ', searchFor);
  fs1.readdirSync(ruf).forEach(file => {
    var rifle = ruf + file;
    let crudeoil = fs2.readFileSync(rifle, 'utf8');
    try {
      let klnd = JSON.parse(crudeoil);
      mylar(klnd,pft);
    } catch (e) {
      return ({e});
    }
  });
  return(eggfoo);
}

function mylar(o,func) {
  for (var i in o) {
      func.apply(this,[i,o[i]]);  
      if (o[i] !== null && typeof(o[i])=="object") {
          mylar(o[i],func);
      }
  }
}

function pft(kgb,volu) {
  if (kgb == searchFor && volu == valueFor) {
    if (eggfoo.length <= 0) {
      eggfoo.push({"key":volu, "value":1});
    } 
    var fdd = false; 
    for (var i=0; i < eggfoo.length; i++) {
      var nm = eggfoo[i].key;
      var ct = eggfoo[i].value;
      if (volu === nm) {
        ct++;
        eggfoo[i].value = ct;
        fdd = true; 
      } 
    }
    if (!fdd) {
      eggfoo.push ({"key":volu, "value":0});
      fdd = false;
    }
  }
}

