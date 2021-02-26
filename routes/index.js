/*jshint esversion: 6 */
/*jshint node: true*/

/**
 * Saratoga Logs Analyzer
 * Author: devb. Copyright www.devb.com
 * License: MIT
 */

'use strict';

const loggerRoutes = require('./routes');

module.exports = function(app, db) {
    loggerRoutes(app, db);
};