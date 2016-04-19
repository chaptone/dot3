var Dot = cc.Sprite.extend({
  ctor: function() {
    this._super();
    this.initWithFile( 'res/images/dot.png' );
    this.direction = null;
  },
  update: function( dt ) {
    var pos = this.getPosition();
    var screenWidth = 800;
    var screenHeight = 600;
    if(this.direction == Dot.DIR.UP){
      if ( pos.y < screenHeight ) {
        this.setPosition( new cc.Point( pos.x, pos.y+10 ) );
      } else {
        this.setPosition( new cc.Point( pos.x, 0 ) );
      }
    }
    if ( this.direction == Dot.DIR.RIGHT ) {
      if ( pos.x < screenWidth ) {
        this.setPosition( new cc.Point( pos.x+10, pos.y ) );
      } else {
        this.setPosition( new cc.Point( 0, pos.y ) );
      }
    }
    if ( this.direction == Dot.DIR.LEFT ) {
      if ( pos.x < screenWidth ) {
        this.setPosition( new cc.Point( pos.x-10, pos.y ) );
      }
      if(pos.x<0){
        this.setPosition( new cc.Point( screenWidth-10, pos.y ) );
      }
    }
    if ( this.direction == Dot.DIR.DOWN ) {
      if ( pos.y < screenWidth ) {
        this.setPosition( new cc.Point( pos.x, pos.y-10 ) );
      }
      if(pos.y<0){
        this.setPosition( new cc.Point(pos.x, screenHeight-10 ) );
      }

    }
  },
  leftDirection: function(){
    this.direction = Dot.DIR.LEFT;
  },
  downDirection: function(){
    this.direction = Dot.DIR.DOWN;
  },
  upDirection: function(){
    this.direction = Dot.DIR.UP;
  },
  rightDirection: function(){
    this.direction = Dot.DIR.RIGHT;
  },

});
Dot.DIR = {
  UP: 32,
  RIGHT: 39,
  LEFT: 37,
  DOWN: 40
};
