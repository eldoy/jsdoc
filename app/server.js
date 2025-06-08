// @ts-check

/**
 * @param {import('http').IncomingMessage} req
 * @param {import('http').ServerResponse} res
 */
function handler(req, res) {
  res.writeHead(200)
  res.end('OK')
}
