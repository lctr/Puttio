import Phaser from 'phaser';

type Scene = Phaser.Scene;
type ShapeArgs = (number | boolean)[];

enum BallSize {
  Normal = 16,
}

class Ball extends Phaser.GameObjects.Arc {
  constructor (scene: Scene, ...args: ShapeArgs) {
    super(scene);
  }
}

export default class Main extends Phaser.Scene {
  constructor () {
    super('Main');
  }
  preload () { }
  create () {
    let r1 = this.add.circle(200, 200, 16, 0xfefefe);
    r1.setIterations(0.01);
    // r1.on('mousedown', )
  }
  update () { }

}
