const request = require('request')

/**
 * Util function that uses request module to request geven res url and send back body output.
 *
 * @param req
 * @param res
 */
const sendJson = (req, res) => {
  let url = (req.query.res) ? req.query.res : 'https://raw.githubusercontent.com/madan95/dummy-api/master/test.json';
  request(url, function (err, response, body) {
    if (!err && response.statusCode === 200) {
      res.json(JSON.parse(body))
    }
    return {"json": "Api not found"}
  })
}

module.exports = {
  sendJson
}
