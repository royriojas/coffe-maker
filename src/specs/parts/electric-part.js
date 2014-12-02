describe( 'electric-part', function () {
  describe( 'init', function () {
    it( 'should set an electricity reference in an object created from its prototype', function () {
      var electricPart = require( '../../js/parts/electric-part' );
      var ins = Object.create( electricPart );
      ins.init();
      expect( electricPart.electricity ).to.be.defined;
    } );
  } );
} );
