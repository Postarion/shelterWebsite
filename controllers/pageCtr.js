exports.home = (req, res) => {
  res.render('home', {
    formMessage: req.flash('form')
  });
};

exports.contact = (req, res) => {
  res.render('contact', {
    formMessage: req.flash('form')
  });
};

exports.test = (req, res) => {
  res.render('test', {
    formMessage: req.flash('form')
  });
};