module.exports = {
  init: function ( electricity ) {
    var me = this;
    me.electricity = electricity;
    console.log( 'init' );
  },
  regulate: function () {
    var me = this;
    console.log( 'regulate...' );
    me.electricity.connect();
  },
  create: function ( electricity ) {
    var ins = Object.create( this );
    ins.init( electricity );
    return ins;
  }
};
