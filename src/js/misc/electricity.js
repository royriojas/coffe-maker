module.exports = {
  connect: function ( thing ) {
    console.log( 'connect to electricity', thing.name || 'unknown electric device' );
    thing.connected = true;
  },
  disconnect: function ( thing ) {
    console.log( ' disconnect from the electricity', thing.name || 'unknown electric device' );
    thing.connected = false;
  }
};
