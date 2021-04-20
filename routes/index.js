var express = require('express');
const { login } = require('../db/login');
const { signUp } = require('../db/signup');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.session.role){
    res.redirect('/login');
  }else{
    res.render('index', { title: 'Inicio' });
  }
});

router.get('/subir', (req, res) => {
  if(!req.session.role){
    res.redirect('/login');
  }else{
    res.render('form', { title: 'Express' });
  }
});

router.get('/recomendar-juego', (req, res) => {
  if(!req.session.role){
    res.redirect('/login');
  }else{
    res.render('recomendar', {title: 'Recomienda un juego'});
  }
})

router.get('/juegos', (req, res) => {
  if(!req.session.role){
    res.redirect('/login');
  }else{
    res.render('videogames', {title: 'Juegos'})
  }
})

router.get('/recomendaciones', (req, res) => {
  if(!req.session.role){
    res.redirect('/login');
  }else{
    res.render('recommendations', {title: 'Recomendaciones'});
  }
})

router.get('/login', (req, res) => {
  res.render('login', {title: 'Inicio de sesión', error:'', msg: ''});
})

router.post('/login', async (req, res) => {
  const {email, password} = req.body;

  try{
    const user = await login(email);
    if(!user) return res.render('login', {title: 'Inicio de sesión', error: 'Email o contraseña incorrectos', msg: ''});
    if(user.password !== password) return res.render('login', {title: 'Inicio de sesión', error: 'Email o contraseña incorrectos', msg: ''})
    req.session.role = user.role;
    res.redirect('/');
  }catch(e){
    console.log(e)
  }
})

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
})

router.get('/registrate', async (req, res) => {
  res.render('registrate', {title: 'Registrate', msg: '', error: ''});
})

router.post('/registrate', async(req, res) => {
  const {email, password} = req.body;

  try{
    const result = await signUp(email, password);
    res.render('login', {title: 'Inicio de sesión', error: '', msg: 'Inicia sesión para continuar'})
  }catch{
    res.render('registrate', {title: 'Registrate', error: 'Ha ocurrido un error, vuelve a intentar', msg: ''})
  }
})

router.get('/panelrecomendacion', (req, res) => {
  res.render('recommendationPanel', {title: 'Panel de Recomendacion'})
})

module.exports = router;
