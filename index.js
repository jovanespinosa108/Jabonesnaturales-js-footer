'use strict';

var moment = require('moment');

/**
 * Returns a div element with a footer and updating year
 * @param {string} name // function will spect a parameter
 * @return {string}
 */
exports.footer = function (name) {
    return "Copyright " + moment().format('YYYY') + " " + name + " All rights reserved";
};