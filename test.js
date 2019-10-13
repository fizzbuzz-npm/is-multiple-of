const test = require('ava');
const isMultipleOf = require("./index.js");

test('even', t => {
    t.is(isMultipleOf(4, 2), true);
    t.is(isMultipleOf(6, 2), true);
});

test('odd', t => {
    t.is(isMultipleOf(75, 2), false);
    t.is(isMultipleOf(5, 2), false);
});

test('string', t => {
    t.is(isMultipleOf("9", "3"), true);
    t.is(isMultipleOf("47", "13"), false);
});
