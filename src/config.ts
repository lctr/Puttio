import Phaser from 'phaser';

/**
 * tallboi mobile dims: (450, 960)
 */
export default {
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#33A5E7',
  width: 540,
  height: 960,
  mode: Phaser.Scale.FIT,
  autoCenter: Phaser.Scale.CENTER_BOTH,
  physics: {
    default: 'matter',
    matter: {
      debug: true
    }
  }
};