var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', author: 'Jorge Rivalcoba', appName: 'WebApp', company: 'Awsome Software' });
});

/* Agregando nueva ruta */
router.get('/greeting', function(req, res, next){
  res.status(200).json({message: 'Hola Campeon de la Fullstack Web'})
})

module.exports = router;
