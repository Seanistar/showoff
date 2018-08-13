var db = require('../db/mysql');

exports.home = function(req, res) {
  const sql = [`SELECT * FROM topic WHERE id=?`, 3];
  db.query(...sql, function(error, topics) {
    db.end();
    if (!error) {
      console.log(topics);
      // res.writeHead(200);
      var result = `<h5>rows : ${JSON.stringify(topics)}</h5>`;
      res.send(result);
    } else {
      console.log('Error while performing Query. ' + error);
      throw error;
    }
  });
  /*const query = db.query('SELECT * FROM topic');
  query.on('result', function(rows) {
    db.pause();
    console.log(rows);
    res.writeHead(200);
    res.end('Success');
  }).on('error', function(err) {
    console.error('Error while performing Query. ' + err);
    throw err;
  })*/
};