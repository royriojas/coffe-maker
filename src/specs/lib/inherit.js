describe( 'inherit', function () {
  var inherit = require( '../../js/lib/inherit' );
  var check = require( '../../js/lib/check' );

  var baseObj = {
    someBaseMethod: function () {

    },
    someBaseProp: true
  };

  it( 'should create a new instance of the base object and mix it with the given properties', function () {
    var newObj = inherit( baseObj );
    expect( baseObj.isPrototypeOf( newObj )).to.be.true;
    expect( newObj.someBaseMethod ).to.be.equal( baseObj.someBaseMethod );
  } );
  it( 'should allow to override methods and props of the baseObj', function () {
    var newObj = inherit( baseObj, {
      anotherMethod: Function.prototype,
      someBaseProp: false
    } );

    expect( check.typeOf( newObj.anotherMethod )).to.equal( 'function' );
  } );
} );
