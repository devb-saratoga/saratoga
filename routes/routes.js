// routes.js
/*jshint esversion: 6 */
/*jshint node: true*/

/**
 * Saratoga Logs Analyzer
 * Author: devb. Copyright www.devb.com
 * License: MIT
 */

'use strict';

let request = require("request");
let reads3 = require('./00reads3Resource');
let logfetch = require('./01logfetchResource');
let logtransform = require('./02logtransformResource');
let alz = require('./05readOutputResource');
let flt = require('./06filterOutputResource');

// start routing here
module.exports = function(app, db) {
    
    app.post('/analyzelogs', (req, res) => {
        console.log('/analyzing logs', req.body);
        let bp = req.body;
        let logger = alz.readOutputResource(bp);
        res.send(logger);
    });

    app.post('/filterlogs', (req, res) => {
        console.log('/filter logs', req.body);
        let bp = req.body;
        let filter = flt.filterOutputResource(bp);
        res.send(filter);
    });

    app.post('/fetchlogs', (req, res) => {
      res.send({});
    });

    app.post('/convertlogs', (req, res) => {
        res.send({});
    });

    app.post('/cleanlogs', (req, res) => {
        res.send({});
    });

    app.post('/decryptlogs', (req, res) => {
        res.send({});
    });

};
