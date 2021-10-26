const router = require("express").Router();

module.exports = (db) => {
  router.get('/resources', (request, response) => {
    db.query('SELECT * FROM ressources;', (err, rows) => {
      if (err) throw err;
      response.json(rows)
    });
  })

  router.get('/resources/:slug', (request, response) => {
    db.query('SELECT * FROM ressources WHERE slug = ?;', [request.params.slug], (err, rows) => {
      if (err) throw err;
      response.json(rows)
    })
  })
  return router;
}