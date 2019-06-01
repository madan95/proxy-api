const express = require('express')
const request = require('request')
const cors = require('cors')
const path = require('path')

const app = express()
const port = 9000

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res, next) => res.send('Test'))

let options = {
  url: 'https://raw.githubusercontent.com/madan95/dummy-api/master/test.json',
  method: 'GET'
}

app.get('/api', (req, res, next) => {
  request(options, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      res.type('json')
      res.send(body)
    }
    return {"json": "Api not found"}
  })
})

app.get('/get', (req, res) => {
  console.log(req.params.q)
  res.send('ok')
})

app.get('/test', (req, res) => res.sendFile(path.join(__dirname, './public/test.html')))

app.listen(port, () => console.log(`Express app listening on port ${port}`))

