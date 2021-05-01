import { MouseConstraint } from 'matter';
import Phaser, { CANVAS } from 'phaser';

type Scene = Phaser.Scene;
type ShapeArgs = (number | boolean)[];

enum BallSize {
  Normal = 16,
}

let world;

export default class Main extends Phaser.Scene {
  ball!: Phaser.Physics.Matter.Image;
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
    this.matter.world.setBounds(100, 100, 300, 400, 10, true, true, true, true).disableGravity();
    
    this.ball = this.matter.add.image(200, 200, 'ball');
    // @ts-ignore
    this.ball.setCircle();
    this.ball.setFriction(0.15);
    this.ball.setBounce(0.8);
    this.ball.setVelocity(4, 1);
    
  }
  update () {
    
  }
  render () {
    
  }
}
