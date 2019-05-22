import 'phaser'
import '@babel/polyfill'

import MainScene from './scenes/mainScene'
import StartScene from './scenes/startScene'
import EndScene from './scenes/endScene'

const DEFAULT_WIDTH = 500
const DEFAULT_HEIGHT = 900

const config = {
  backgroundColor: '#fff',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  },
  scene: [StartScene,MainScene,EndScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 400 }
    }
  }
}

window.addEventListener('load', () => {
  let game = new Phaser.Game(config)
})
