"use strict"
const toInt = require('to-integer')
const modulus = require('modulus-operator')
const isEqual = require("lodash.isequal")

function isMultipleOf(value, multiple) {
    return isEqual(modulus(toInt(value), toInt(multiple)), 0)
}

module.exports = isMultipleOf;
