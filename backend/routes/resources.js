const router = require("express").Router();

module.exports = (db) => {
  router.get('/resources', (request, response) => {
    db.query('SELECT * FROM ressources;', (err, rows) => {
      if (err) throw err;

      // console.log('Data received from Db:');
      // console.log('rows[0].slug', rows[0].slug);

      response.json(rows)
      // response.json(
      //   rows.reduce(
      //     (previous, current) => ({ ...previous, [current.id]: current }),
      //     {}
      //   )
      // )
    });
  })
  return router;
}