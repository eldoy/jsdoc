// @ts-check

/** @type User */
const user = { id: 1, name: 'Alice' }

/** @type ApiResponse */
const response = { success: true, data: user }

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
