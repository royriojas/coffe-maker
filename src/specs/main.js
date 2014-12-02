var actualCoffeeMaker = require( '../js/coffee-maker' );

describe( 'main', function () {
  it( 'should start the coffee-maker and make good coffee', function ( done ) {
    var me = this;
    var brewSpy;

    var deps = {
      'window': {
        location: {
          href: ''
        },
        alert: me.sandbox.spy()
      },
      './coffee-maker': {
        create: function () {

          var cm = actualCoffeeMaker.create();
          brewSpy = me.sandbox.spy( cm, 'brew' );
          return cm;
        }
      }
    };

    var main = require( '../js/main', deps );

    var coffee = main.start();

    expect( brewSpy ).to.have.been.called;

    coffee.then(function ( result ) {
      expect( result.coffee.name ).to.equal( 'good coffee!' );
      expect( deps.window.location.href ).to.equal( 'http://photobucket.com/images/cat?page=1' );
      expect( deps.window.alert ).to.have.been.calledWith( 'Done! ===>> good coffee!' );
      done();
    } );
  } );
} );
