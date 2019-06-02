const express = require('express')
const cors = require('cors')
const path = require('path')
const { sendJson } = require('./utils/utils')
const bodyParser = require('body-parser')
const app = express()
const port = 9000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(express.static(path.join(__dirname, 'build')))

/**
 * Todo: Dummy api using custom urls
 *
 */
app.post('/add', (req, res) => {
  console.log(req.body);
  res.json({'ok': 'mate'})
  //sendJson(req, res)
})

/**
 * Middleware to get res JSON api and by pass CORS issue.
 * /get?res=external_resource_url
 *
 */
app.get('/get', (req, res) => {
  sendJson(req, res)
})

app.get('/', (req, res ) => res.sendFile(path.join(__dirname, './build/index.html')))

app.listen(port, () => console.log(`Express app listening on port ${port}`))
