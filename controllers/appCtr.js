const Application = require('../models/application');

exports.store = (req, res) => {

  Application.create({
    'name': req.body.name,
    'phone': req.body.phone,
    'message': req.body.message
  }).then(function() {
    req.flash('form', req.body.first_name + ' you are Amazing!');
    res.redirect('/');
  });
};

exports.normalizeData = (req, res, next)=>{
  const nameArr = req.body.name.split(' ');
  // zmiana tekstu w array

  req.body.first_name = nameArr.shift();
  req.body.last_name = nameArr.join(' ');
  
  next();
};