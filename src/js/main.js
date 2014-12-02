var win = require( 'window' );

var main = module.exports = {
  start: function () {
    require( 'es6-promise/dist/es6-promise' ).polyfill();

    var coffeeMaker = require( './coffee-maker' ).create();
    var p = coffeeMaker.brew();

    p.then(function ( args ) {

      // Please never do this... this is just an example of how to require globals 
      // like 'window'. Basically any global can be "required" and mocked during 
      // testing. This is handy when you have code that modifies the window.location.href for example in this case
      // we re just redirecting the user to a page with cats... because... reasons.
      win.alert( 'Done! ===>> ' + args.coffee.name );
      // be aware that if you don't mock the location.href... this will kill your karma tests.
      // with the following error: 
      // > PhantomJS 1.9.8 (Mac OS X) ERROR
      // > Some of your tests did a full page reload!
      win.location.href = 'http://photobucket.com/images/cat?page=1';
    } );

    return p;
  }
};

// this will be replaced by the build process
// on production by false. And uglify will just remove it from the final
// bundle since it is always true
/* istanbul ignore if */
if ( !global.__TEST_ENV__ ) {
  main.start();
}
