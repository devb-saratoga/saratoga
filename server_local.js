/*jshint esversion: 6 */
/*jshint node: true*/
/**
 * Saratoga Logs Analyzer
 * Author: devb. Copyright www.devb.com
 * License: MIT
 */

// server.js
'use strict';

const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();
var   cors           = require('cors');
const fs             = require('fs');
var helmet           = require('helmet');
const port           = 7000;

app.use(helmet());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('./htdocs'));
let vno = "0.001";

require('./routes')(app, {});

app.listen(port, () => {
    console.log('Local only ........');
    console.log('Saratoga CLA started on ' + port);
    console.log('Saratoga https server version ' + vno);
    console.log('Saratoga (c) Copyright Devb Inc. www.devb.com','All Rights Reserved.');
});

