describe( 'electricity', function () {
  var electricity = require( '../../js/misc/electricity' );

  describe( 'connect', function () {
    it( 'should connect a thing to the electricity', function () {

      var thing = {
        name: 'electric part',
        connected: false
      };

      electricity.connect( thing );

      expect( thing.connected ).to.be.true;
    } );
    it( 'should handle unknown things', function () {

      var thing = {
        connected: false
      };

      electricity.connect( thing );

      expect( thing.connected ).to.be.true;
    } );
  } );

  describe( 'disconnect', function () {
    it( 'should disconnect a thing from the electricity', function () {
      var thing = {
        name: 'electric part',
        connected: true
      };

      electricity.disconnect( thing );
      expect( thing.connected ).to.be.false;

    } );

    it( 'should disconnect a thing from the electricity even when unknown', function () {
      var thing = {
        connected: true
      };

      electricity.disconnect( thing );
      expect( thing.connected ).to.be.false;

    } );
  } );
} );
