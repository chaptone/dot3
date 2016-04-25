var GameLayer = cc.LayerColor.extend({
  ball:[],
  init: function() {
    this._super( new cc.Color( 0, 0, 0, 255 ) );
    this.setPosition( new cc.Point( 0, 0 ) );

    this.scoreLabel = cc.LabelTTF.create( '0', 'Arial', 40 );
    this.scoreLabel.setPosition( new cc.Point( 750, 550 ) );
    this.addChild( this.scoreLabel );
    this.scheduleUpdate();

    this.addKeyboardHandlers();
    this.dot = new Dot();
    this.dot.setPosition( new cc.Point( 400, 300 ) );
    this.addChild( this.dot );
    this.dot.scheduleUpdate();

    // cc.audioEngine.playMusic(res.Main_Music,false);


    this.score = 0;
    this.min = 3;
    this.countBall = 3;

    this.setBall();

    return true;
  },
  onKeyDown: function( keyCode, event ) {
    if ( keyCode == cc.KEY.right ) {
      this.dot.rightDirection();
    }
    else if ( keyCode == cc.KEY.up ) {
      this.dot.upDirection();
    }
    else if ( keyCode == cc.KEY.left ) {
      this.dot.leftDirection();
    }
    else if ( keyCode == cc.KEY.down ) {
      this.dot.downDirection();
    }
  },
  onKeyUp: function( keyCode, event ) {
  },
  addKeyboardHandlers: function() {
    var self = this;
    cc.eventManager.addListener({
      event: cc.EventListener.KEYBOARD,
      onKeyPressed : function( keyCode, event ) {
        self.onKeyDown( keyCode, event );
      },
      onKeyReleased: function( keyCode, event ) {
        self.onKeyUp( keyCode, event );
      }
    }, this);
  },
  setX: function() {
    var min = this.min;
    var max = min;
    var coordX = Math.random()*(max-min)+min;
    return coordX;
  },
  setY: function() {
    var min = this.min;
    var max = this.min+3;
    var coordY = Math.random()*(max-min)+min;
    return coordY;
  },
  setBall: function(){
    var temp = Math.ceil(Math.random()*4);
    for(var i = 0 ; i < 3 ; i++){
      this.ball[i] = new Whitedot();
      this.ball[i].vx = this.setX();
      this.ball[i].vy = this.setY();
      this.addChild(this.ball[i]);
      this.ball[i].scheduleUpdate();
    }
    return temp;
  },
  update: function( dt ) {
    for(var i = 0 ; i < 3 ; i ++){
      if ( this.ball[i].closeTo( this.dot ) ) {
        cc.audioEngine.playEffect(res.Pickup_sound,false);
        this.score+=this.min;
        this.scoreLabel.setString( this.score + "" );
        this.removeChild( this.ball[i] );
        this.countBall--;
        this.ball[i].setPosition( new cc.Point(-30,-30));
        if(this.countBall == 0){
          this.countBall = 3;
          this.setBall();
          this.min+=1;
         }
      }
    }
  },
});
var StartScene = cc.Scene.extend({
  onEnter: function() {
    this._super();
    var layer = new GameLayer();
    layer.init();
    this.addChild( layer );
  }
});
