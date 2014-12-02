/**
 * @module coffee-maker
 **/

/**
 * A miscelaenous module
 * @submodule misc
 **/

/**
 * Electricity class, we only need one instance of this one so no create method on this module
 * @class electricity
 * @static
 */

module.exports = {
  /**
   * connects an `electric-part` to the electricity (just set the `connected` property to true
   * @method connect
   * @param thing {electric-part}
   */
  connect: function ( thing ) {
    console.log( 'connect to electricity', thing.name || 'unknown electric device' );
    thing.connected = true;
  },
  /**
   * disconnects an `electric-part` to the electricity (just set the `connected` property to true
   * @method disconnect
   * @param thing {electric-part}
   */
  disconnect: function ( thing ) {
    console.log( ' disconnect from the electricity', thing.name || 'unknown electric device' );
    thing.connected = false;
  }
};
