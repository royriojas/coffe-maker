describe( 'grinder', function () {
  describe( 'create', function () {
    it( 'should create a grinder instance calling the init method from the electric-part', function () {
      var me = this;

      var initSpy = me.sandbox.spy();
      var deps = {
        './electric-part': {
          init: initSpy
        }
      };

      var ins = require( '../../js/parts/grinder', deps ).create();

      expect( initSpy ).to.have.been.called;

    } );
  } );

  describe( 'grind', function () {
    it( 'should know how to grind', function () {
      // in a real scenario the test will be actually meaningful, here, we just will test that 
      // the grinder is connected to the electricity
      var grinder = require( '../../js/parts/grinder' ).create();

      expect( grinder.grind ).to.be.defined;

      grinder.grind();

      expect( grinder.connected ).to.be.true;
    } );
  } );
} );
