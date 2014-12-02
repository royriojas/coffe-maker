describe( 'check', function () {

  beforeEach(function () {
    this.check = require( '../../js/lib/check' );
  } );

  describe( 'isNull', function () {

    it( 'should return true if an object is null', function () {
      var obj = {
        prop: null
      };

      expect( this.check.isNull( obj.prop )).to.be.truthy;
    } );

    it( 'should return true if an object is undefined', function () {
      var obj = {};

      expect( this.check.isNull( obj.prop )).to.be.truthy;
    } );

    it( 'should return false in all other cases', function () {
      var obj = {
        prop: null
      };

      expect( this.check.isNull( obj )).to.be.falsy;
    } );
  } );

  describe( 'isNullOrEmpty', function () {

    it( 'should return true if the string pass is null or empty', function () {
      expect( this.check.isNullOrEmpty()).to.be.truthy;
    } );

    it( 'should return true if the string pass is null or empty', function () {
      expect( this.check.isNullOrEmpty( 'asdas' )).to.be.falsy;
    } );
  } );

  describe( 'isPlainObject', function () {

    it( 'should return true if given object is a plain object', function () {
      expect( this.check.isPlainObject( {} )).to.be.truthy;
    } );

    it( 'should return true if given object is a plain object', function () {
      expect( this.check.isPlainObject( {
        some: 'nice'
      } )).to.be.truthy;
    } );

    it( 'should return false if the given object is not a plain object ', function () {
      expect( this.check.isPlainObject( 'asdas' )).to.be.falsy;
    } );

    it( 'should return false if the given object is not a plain object ', function () {
      expect( this.check.isPlainObject( Object.create( Function.prototype )) ).to.be.falsy;
    } );
  } );

  describe( 'typeOf', function () {
    it( 'should return the type of a given object', function () {
      expect( this.check.typeOf( 'string' )).to.equal( 'string' );
      expect( this.check.typeOf( {} )).to.equal( 'object' );
      expect( this.check.typeOf( Function.prototype )).to.equal( 'function' );
      expect( this.check.typeOf( null )).to.equal( 'null' );
      expect( this.check.typeOf( arguments )).to.equal( 'object' );
    } );
  } );

} );
