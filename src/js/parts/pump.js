/**
 * @submodule parts
 **/

/**
 * A pump
 * @class pump
 * @extends electric-part
 */
var inherit = require( '../lib/inherit' );
var electricPart = require( './electric-part' );

module.exports = inherit( electricPart, {

  /**
   * The name of this module (added for demo purposes only, when the `console.log` methods are printed on the browser
   * is easier to identify the instances from this "class".
   * @property name {String}
   */
  name: 'pump', // added only for demo purposes
  /**
   * Just pumps some water
   * @method pump
   */
  pump: function () {
    var me = this;
    me.electricity.connect( this );
    console.log( 'pump:pumping' );
  },
  /**
   *
   * Factory method to create instances based on this prototoype
   * @method create
   * @static
   * @return {pump} a `pump` instance
   */
  create: function () {
    var ins = Object.create( this );
    ins.init();
    return ins;
  }
} );
