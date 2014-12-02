/**
 * This module provides the entry point for the application
 * It is marked as static because it is used as it is a static class
 *
 * @class main
 * @static
 */

var main = module.exports = {
  /**
   * Start the app, creates the coffee maker and produce some coffee. It returns
   * a promise that will have the coffee produced when resolved.
   *
   * @method start
   * @returns Promise
   */
  start: function () {

    // **Promise Polyfill**
    //
    // Make sure Promise is polyfilled on browsers that do not support it (like `phantomjs`)
    require( 'es6-promise/dist/es6-promise' ).polyfill();

    // Create an instance of the coffee maker
    var coffeeMaker = require( './coffee-maker' ).create();

    // brew some coffee
    var p = coffeeMaker.brew();

    // Now you get...
    //
    // wait for it... wait for it...
    p.then(function ( args ) {

      // ...some nice coffee in the `args` object

      var win = require( 'window' );

      // **Don't use alert**
      //
      // Please never use alert, try to use something like [this](http://tympanus.net/Development/ModalWindowEffects/)
      //
      // this is just an example of how to require globals
      // like 'window'. Basically any global can be "required" and mocked during 
      // testing. 
      win.alert( 'Done! ===>> ' + args.coffee.name );

      // This is handy when you have code that modifies the `window.location.href` 
      // for example in this case we re just redirecting the user to a page 
      // with cats... because... reasons.
      // 
      // **Important**
      //
      // be aware that if you don't mock the location.href... this will kill your karma tests.
      // with the following error: 
      //
      // > PhantomJS 1.9.8 (Mac OS X) ERROR
      // > Some of your tests did a full page reload!
      //
      win.location.href = 'http://photobucket.com/images/cat?page=1';
    } );

    return p;
  }
};

// this will be replaced by the build process (`ez-frontend`) by the value `false`
// `Uglify` will then just remove the `if` statement from the final bundle
// since it will always be `true`
/* istanbul ignore if */
if ( !global.__TEST_ENV__ ) {
  main.start();
}
