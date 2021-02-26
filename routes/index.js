/*jshint esversion: 6 */
/*jshint node: true*/

'use strict';

const loggerRoutes = require('./routes');

module.exports = function(app, db) {
    loggerRoutes(app, db);
};