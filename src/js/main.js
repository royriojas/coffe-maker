var main = module.exports = {
  start: function () {
    require( 'es6-promise/dist/es6-promise' ).polyfill();

    var coffeeMaker = require( './coffee-maker' ).create();
    coffeeMaker.brew();
  }
};

main.start();
