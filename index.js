const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertObjectsEqual = require('./assertObjectsEqual')
const countLetters = require ('./countLetters')
const countOnly = require('./countOnly')
const eqObjects = require('./eqObjects')
const findKeyByValue = require('./findKeyByValue')
const findKey = require('./findKey')
const flatten = require('./flatten')
const letterPositions = require('./letterPositions')
const map = require('./map')
const sum = require('./sum')
const takeUntil = require('./takeUntil')
const without = require('./without')


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  eqArrays: eqArrays,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  eqObjects: eqObjects,
  findKeyByValue: findKeyByValue,
  findKey: findKey,
  flatten: flatten,
  letterPositions: letterPositions,
  map: map,
  sum: sum,
  takeUntil: takeUntil,
  without: without,

};