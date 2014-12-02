/**
 * @submodule parts
 **/

/**
 * A Simple Grinder class that has an instance of electricPart in its prototype
 *
 * @class grinder
 * @extends electric-part
 */
var inherit = require( '../lib/inherit' );
var electricPart = require( './electric-part' );

module.exports = inherit( electricPart, {

  /**
   * The name of this module
   * @property name {String}
   */
  // added only for demo purposes
  name: 'grinder',

  /**
   * just grind some coffee
   * @method grind
   */
  grind: function () {
    var me = this;
    // just connect it
    me.electricity.connect( this );
    console.log( 'grinder:grinding' );
  },
  /**
   *
   * Factory method to create instances based on this prototoype
   * @method create
   * @static
   * @return {grinder} a `grinder` instance
   */
  create: function () {
    var ins = Object.create( this );
    // please note this init method is the "inherited" one from the `electric-part` module
    ins.init();
    return ins;
  }
} );
