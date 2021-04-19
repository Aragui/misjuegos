var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('recommendationPanel', { title: 'Express' });
});

router.get('/subir', (req, res) => {
  res.render('form', { title: 'Express' });
});

router.get('/recomendar-juego', (req, res) => {
  res.render('recomendar', {title: 'Recomienda un juego'});
})

router.get('/juegos', (req, res) => {
  res.render('videogames', {title: 'Juegos'})
})

router.get('/recomendaciones', (req, res) => {
  res.render('recommendations', {title: 'Recomendaciones'})
})

router.get('/panelrecomendacion', (req, res) => {
  res.render('recommendationPanel', {title: 'Panel de Recomendacion'})
})

module.exports = router;
