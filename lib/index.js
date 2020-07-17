var Checkr = require('./resources/Checkr');

var CheckrFactory = function (config) {
  return new Checkr(config);
};

CheckrFactory.Checkr = Checkr;

module.exports = CheckrFactory;
