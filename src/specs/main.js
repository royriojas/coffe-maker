var actualCoffeeMaker = require( '../js/coffee-maker' );

describe( 'main', function () {
  it( 'should start the coffee-maker and make coffee', function () {
    var me = this;
    var brewSpy;

    var deps = {
      './coffee-maker': {
        create: function () {

          var cm = actualCoffeeMaker.create();
          brewSpy = me.sandbox.spy( cm, 'brew' );
          return cm;
        }
      }
    };

    require( '../js/main', deps );

    expect( brewSpy ).to.have.been.called;

  } );
} );
