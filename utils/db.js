const sqlite3 = require('sqlite3').verbose()

const get_db = () => new sqlite3.Database('./db/api.db', (err) => {
  if (err) {
    console.log(err.message)
  }
  console.log('Connnected to api database.')
})

const db_close = (db) => db.close((err) => {
  if (err) {
    console.log(err.message)
  }
  console.log('Close the database connection')
})

const db_create = () => {
  let db = get_db()
  db.serialize(function () {
    db.run('CREATE TABLE api (url TEXT, data TEXT)', function (err) {
      console.log('Table already created m8')
    })
    db.each('SELECT rowid AS id, data, url FROM api', function(err, row){
      console.log(row.id + ' : '+ row.url + ' : ' +row.data)
    })
  })
  db_close(db)
}

const insertSqliteData = (url, data) => {
  let db = get_db();
  let stmt = db.prepare('INSERT INTO api VALUES(?,?)')
  stmt.run(url, data)
  console.log('Data being inserted')
  stmt.finalize()
  db_close(db)
}

const getSqliteData = (callback) => {
  let db = get_db()
  db.all('SELECT rowid AS id, data, url FROM api', [],  callback)
  db_close(db)
}

const getDataWhereUrlIs = (url, func) => {
  let db = get_db()
  let sql = `SELECT rowid AS id , data, url FROM api WHERE url = ?`
  db.each(sql, [url], func)
  db_close(db)
}

module.exports = {
  get_db,
  db_close,
  db_create,
  insertSqliteData,
  getSqliteData,
  getDataWhereUrlIs
}
