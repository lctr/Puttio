import Phaser from 'phaser';

enum BallState {
  Free, DragStart, Dragging, DragEnd
}

export default class Main extends Phaser.Scene {
  ball!: Phaser.Physics.Matter.Image;
  ballVect!: MatterJS.BodyType;
  clickState!: BallState;
  vel: [number, number] = [4, 1];
  constructor () {
    super('Main');
  }
  preload () {
    this.load.spritesheet('ball', 'assets/glassy-orbs.png', {
      frameWidth: 17,
      frameHeight: 17
    });
  }
  create () {
    // set the bounds for which physics applies
    this.matter.world.setBounds(100, 100, 300, 400, 10, true, true, true, true).disableGravity();
    
    // using static image for simplicity's sake atm
    this.ball = this.matter.add.image(200, 200, 'ball');
    // @ts-ignore
    this.ball.setCircle();
    this.ball.setFriction(0.15);
    this.ball.setBounce(0.8);
    this.ball.setVelocity(...this.vel);
    
    this.ball.on('mousedown', this.mouseDown);
    this.ball.on('mouseup', this.mouseUp);

    this.matter.add.mouseSpring();
  }
  mouseDown () {
    
    this.clickState = BallState.DragStart;

    let { x, y } = this.ball.body.position;
    this.ballVect = this.matter.add.rectangle(x, y, 10, 5);
  }
  mouseUp () {
    
  }
  dPotential () {
    this.vel[ 0 ] = this.input.activePointer.getDistanceX();
    console.log(this.vel);
  }
  update () {
    switch (this.clickState) {
      case BallState.DragStart:
      case BallState.Dragging:
      case BallState.DragEnd:
        this.clickState = BallState.Free;
      default:
    }
  }
  render () {
    
  }

}
