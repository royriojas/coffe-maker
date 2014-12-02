/**
 * @submodule parts
 **/

/**
 * A heater
 * @class heater
 * @extends electric-part
 */
var inherit = require( '../lib/inherit' );
var electricPart = require( './electric-part' );
var regulator = require( './regulator' );

module.exports = inherit( electricPart, {
  name: 'heater', // added only for demo purposes
  /**
   *
   * Overrides the `electric-part:init` method
   * @method init
   *
   */
  init: function () {
    var me = this;
    // example of how to override the init method from the base "class"
    // just call init applied on the current object to call the base method
    electricPart.init.call( me );

    // create an instance of the regulator
    // in this case the create method receives a reference to the electricity
    me.regulator = regulator.create( me.electricity );
  },
  /**
   * Turns on the heater and use the regulator to make sure electricity behave properly
   * @method on
   */
  on: function () {
    var me = this;
    me.electricity.connect( this );
    me.regulator.regulate();
    console.log( 'heater:heating!' );
  },
  /**
   *
   * Factory method to create instances based on this prototoype
   * @method create
   * @static
   * @return {heater} a `heater` instance
   */
  create: function () {
    var ins = Object.create( this );
    ins.init();
    return ins;
  }
} );
