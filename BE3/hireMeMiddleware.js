const bodyParser = require('body-parser');

const processHireForm = (req, res, next) => {
  res.send('Form submitted successfully!');
};

module.exports = processHireForm;
