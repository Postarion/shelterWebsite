const Application = require('../models/application');
const { check, validationResult } = require('express-validator/check');

exports.store = async (req, res, next) => {
  try{
    await Application.create({
      'name': req.body.name,
      'phone': req.body.phone,
      'message': req.body.message
    });
  } catch(err){
    return next(err);
  };
 
  req.flash('form', req.body.first_name + ' you are Amazing!');
  res.redirect('/');
};

exports.validate = [
  check('name').trim().isLength({min: 1 }).withMessage('Name is required.'),
  check('phone').isLength({min: 1 }).withMessage('Phone is required.'),
  check('message').isLength({min: 1 }).withMessage('Message is required.')
];

exports.checkValidation = (req, res, next) => {
  const errors = validationResult(req);

  if( ! errors.isEmpty()) {
    return res.render('home', {
      validated: req.body,
      errors: errors.mapped(),
      showLightbox: 'true'
    });
  }
  next();
};

exports.normalizeData = (req, res, next)=>{
  const nameArr = req.body.name.split(' ');
  // zmiana tekstu w array

  req.body.first_name = nameArr.shift();
  req.body.last_name = nameArr.join(' ');
  
  next();
};