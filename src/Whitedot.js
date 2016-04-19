var Whitedot = cc.Sprite.extend({
  ctor: function() {
    this._super();
    this.initWithFile( 'res/images/otherdot.png' );
    this.vx = 5;
    this.vy = 5;
  },
  update: function( dt ) {
    var pos = this.getPosition();
    var screenWidth = 800;
    var screenHeight = 600;
    if( pos.x < 800 || pos.y < 600 ){
      this.setPosition( new cc.Point( pos.x + vx , pos.y + vy ) );
    }
  },
  closeTo: function( obj ) {
    var myPos = this.getPosition();
    var oPos = obj.getPosition();
    return ( ( Math.abs( myPos.x - oPos.x ) <= 25 ) &&
    ( Math.abs( myPos.y - oPos.y ) <= 25 ) );
  },
});
