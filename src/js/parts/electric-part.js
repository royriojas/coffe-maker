/**
 * @submodule parts
 **/

/**
 * @class electric-part
 * @static
 */
module.exports = {
  /**
   * Whether the electric part is connected or not
   * @property connected {Boolean}
   */
  connected: false,
  /**
   * creates a electric reference on the current context (`this` object)
   * @method init
   */
  init: function () {
    // just require the electricity and create a reference to it
    // on the current context (`this` object)
    var me = this;
    var electricity = require( '../misc/electricity' );
    me.electricity = electricity;
  }
};
