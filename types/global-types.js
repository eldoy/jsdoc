// @ts-check

/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} name
 */

/**
 * @typedef {Object} ApiResponse
 * @property {boolean} success
 * @property {any} [data]
 */

/**
 * A handler function that processes a request and returns a result.
 * @typedef {(req: any) => any} ViewHandler
 */

/**
 * A map of view handler functions, keyed by view name.
 * @typedef {Object.<string, ViewHandler>} AppViews
 */

/**
 * Application context object.
 * @typedef {Object} AppContext
 * @property {{ views: AppViews }} app
 */
