import Phaser from 'phaser';
import config from './config';
import Main from './scenes/Main';

new Phaser.Game(
  Object.assign(config, {
    scene: [ Main ]
  })
);