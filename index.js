"use strict"
const toInt = require('to-integer')

function isMultipleOf(value, multiple){
    return toInt(value) % toInt(multiple) === 0
}

module.exports = isMultipleOf;
