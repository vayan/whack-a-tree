import FpsText from '../objects/fpsText'

export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    const endGame = this.add.text(
      0,
      0,
      'End Game',
      { fill: '#0f0' }
    );
    endGame.setInteractive();

    endGame.on('pointerdown', () => {
      this.scene.start('EndScene')
    })
  }

  update() {
  }
}
