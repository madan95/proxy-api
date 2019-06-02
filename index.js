const express = require('express')
const cors = require('cors')
const path = require('path')
const { sendJson } = require('./utils/utils')
const bodyParser = require('body-parser')
const db = require('./utils/db')

db.db_create()

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
  db.insertSqliteData(req.body.url, req.body.data)
  db.getSqliteData()
  res.json({'ok': 'mate'})
  //sendJson(req, res)
})

app.get('/api/:url', (req, res) => {
  console.log(req.params.url)
  let data = db.getDataWhereUrlIs(req.params.url)
  let count = 0;
  // Todo: Handle multiple user with same url by using id
  // Also fix async way of getting data on time
  let result =  db.getDataWhereUrlIs(req.params.url, function (err, row) {
      if (err) {
        throw err;
      }
      console.log(`${row.url} : ${row.data}`)
      console.log(count)
    if (count==0) {
      res.json(JSON.parse(row.data));
    }
    count +=1;
  })
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
