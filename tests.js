const isBalanced = require('./balanced-brackets')
const assert = require('assert')

describe('Tests', function () {
  it('isBalanced should be a function.', function () {
    assert(typeof isBalanced === 'function')
  })
  it('isBalanced("[]") should return true.', function () {
    assert(isBalanced(testCases[0]))
  })
  it('isBalanced("]][[[][][][]][") should return false.', function () {
    assert(!isBalanced(testCases[1]))
  })
  it('isBalanced("[][[[[][][[[]]]]]]") should return true.', function () {
    assert(isBalanced(testCases[2]))
  })
  it('isBalanced("][") should return false.', function () {
    assert(!isBalanced(testCases[3]))
  })
  it('isBalanced("[[[]]]][[]") should return false.', function () {
    assert(!isBalanced(testCases[4]))
  })
  it('isBalanced("][[]") should return false.', function () {
    assert(!isBalanced(testCases[5]))
  })
  it('isBalanced("][[][]][[[]]") should return false.', function () {
    assert(!isBalanced(testCases[6]))
  })
  it('isBalanced("[[][]]][") should return false.', function () {
    assert(!isBalanced(testCases[7]))
  })
  it('isBalanced("[[[]]][[]]]][][[") should return false.', function () {
    assert(!isBalanced(testCases[8]))
  })
  it('isBalanced("[]][[]]][[[[][]]") should return false.', function () {
    assert(!isBalanced(testCases[9]))
  })
  it('isBalanced("][]][[][") should return false.', function () {
    assert(!isBalanced(testCases[10]))
  })
  it('isBalanced("[[]][[][]]") should return true.', function () {
    assert(isBalanced(testCases[11]))
  })
  it('isBalanced("[[]]") should return true.', function () {
    assert(isBalanced(testCases[12]))
  })
  it('isBalanced("]][]][[]][[[") should return false.', function () {
    assert(!isBalanced(testCases[13]))
  })
  it('isBalanced("][]][][[") should return false.', function () {
    assert(!isBalanced(testCases[14]))
  })
  it('isBalanced("][][") should return false.', function () {
    assert(!isBalanced(testCases[15]))
  })
  it('isBalanced("[]]]") should return false.', function () {
    assert(!isBalanced(testCases[16]))
  })
  it('isBalanced("") should return true.', function () {
    assert(isBalanced(testCases[17]))
  })
})

const testCases = [
  '[]',
  ']][[[][][][]][',
  '[][[[[][][[[]]]]]]',
  '][',
  '[[[]]]][[]',
  '][[]',
  '][[][]][[[]]',
  '[[][]]][',
  '[[[]]][[]]]][][[',
  '[]][[]]][[[[][]]',
  '][]][[][',
  '[[]][[][]]',
  '[[]]',
  ']][]][[]][[[',
  '][]][][[',
  '][][',
  '[]]]',
  ''
]
