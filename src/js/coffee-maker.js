/**
 * A demo app of the coffee maker app shown in
 * this [repo](https://github.com/wesleycho/ng-conf-2014/blob/master/slides/example-of-dependency-injection-4.md)
 * @module coffee-maker
 *
 */

/**
 * @class coffee-maker
 */
var Promise = require( 'Promise' );

module.exports = {
  /**
   * initialize the pieces required by the `coffee-maker`
   * @method init
   */
  init: function () {
    var me = this;

    // create a heater
    me.heater = require( './parts/heater' ).create();

    // create a grinder
    me.grinder = require( './parts/grinder' ).create();

    // create a pump
    me.pump = require( './parts/pump' ).create();
  },
  /**
   * Produce some nice and aromatic coffee... and return a Promise so consumers can know when the coffee is ready.
   * (actually it is just a dummy method, software can't produce coffee... yet!)
   *
   * @method brew
   * @returns {Promise}
   */
  brew: function () {
    var me = this;

    // make them work!
    me.grinder.grind();
    me.heater.on();
    me.pump.pump();

    console.log( 'brewing coffee start!' );

    return new Promise(function ( resolve, reject ) {
      // this code just simulate an expensive async operation 
      setTimeout(function () {
        console.log( 'brewing coffee done!' );
        resolve( {
          coffee: {
            name: 'good coffee!'
          }
        } );
      }, 1000 );
    } );
  },
  /**
   * Factory method. Create an instance of the current `Prototoype` (this module)
   * @method create
   * @return {coffee-maker} a `coffee-maker` instance
   * @static
   */
  create: function () {
    // Create and object based on this prototype
    var ins = Object.create( this );
    // call its **init** method
    ins.init();
    // finally return the instance
    return ins;
  }
};
