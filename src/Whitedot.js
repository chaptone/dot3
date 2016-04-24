var Whitedot = cc.Sprite.extend({
  ctor: function() {
    this._super();
    this.initWithFile( 'res/images/otherdot.png' );
    this.setPosition( new cc.Point( 400, 300 ) );
    this.vx = 5;
    this.vy = 5;
  },
  moveX: function(){
    var pos = this.getPosition();
    if( pos.x > 780 ) this.vx = - this.vx;
    else if(pos.x < 20 ) this.vx = Math.abs(this.vx);
    return this.vx;
  },
  moveY: function(){
    var pos = this.getPosition();
    if( pos.y > 580 ) this.vy = - this.vy;
    else if(pos.y < 20 ) this.vy = Math.abs(this.vy);
    return this.vy;
  },
  update: function( dt ) {
    var pos = this.getPosition();
    this.setPosition( new cc.Point( pos.x + this.moveX() , pos.y + this.moveY() ) );
  },
  closeTo: function( obj ) {
    var myPos = this.getPosition();
    var oPos = obj.getPosition();
    return ( ( Math.abs( myPos.x - oPos.x ) <= 25 ) &&
    ( Math.abs( myPos.y - oPos.y ) <= 25 ) );
  },
});
