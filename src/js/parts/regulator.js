/**
 * @module coffee-maker
 **/

/**
 * The parts for the coffee-maker
 * @submodule parts
 **/

/**
 * Makes sure electrons don't go nuts... (Seriously!)
 * @class regulator
 *
 */
module.exports = {
  /**
   * The name of this module (added for demo purposes only, when the `console.log` methods are printed on the browser
   * is easier to identify the instances from this "class".
   * @property name {String}
   */
  name: 'regulator', // added for demo purposes
  /**
   * Receives the electricity and store a reference to it
   * @method init
   * @param electricity
   */
  init: function ( electricity ) {
    var me = this;
    me.electricity = electricity;
    console.log( 'regulator init...' );
  },
  /**
   * Makes sure the electrons don't go nuts
   * @method regulate
   */
  regulate: function () {
    var me = this;
    me.electricity.connect( this );
    console.log( 'regulartor:regulate...' );
  },
  /**
   *
   * Factory method to create instances based on this prototoype
   * @method create
   * @static
   * @return {regulator} a `regulator` instance
   */
  create: function ( electricity ) {
    var ins = Object.create( this );
    ins.init( electricity );
    return ins;
  }
};
