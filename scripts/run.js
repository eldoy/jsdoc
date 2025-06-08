// @ts-check
export {}

var util = require('../lib/util.js')

/** @type User */
var user = { id: 1, name: 'Alice' }

/** @type ApiResponse */
var response = { success: true, data: user }

/** @type string */
var hello = 'jsdoc'

/**
 * @param {string} name
 * @param {number} count
 * @returns {string}
 */
function greet(name, count) {
  return `${name} called ${count} times`
}

/** @type string */
var result = greet('tekki', 0)
