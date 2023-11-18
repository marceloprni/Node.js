var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var isAuth = require('../middlewares/authorize.js').isAuth;
var isNotAuth = require('../middlewares/authorize.js').isNotAuth;


router.get('/', function(req, res, next) {
  if (req.isAuthenticated()) {
    res.redirect('/home')
  }else{
    res.render('login');
  }
});

router.post('/', passport.authenticate('local',{
  successRedirect: '/home',
  failureRedirect: '/error',
}));

router.get('/home', (req, res, next)=> {
  if (!req.isAuthenticated()) {
    return res.redirect('/')
  }

  res.render('home',{
    session: req.session,
    usuario: req.user
  });

});

router.get('/logout', (req, res, next)=> {
  req.session.destroy();
  res.redirect('/')
});


  