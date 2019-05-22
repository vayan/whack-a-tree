export default class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: 'StartScene' })
  }

  preload() {
  }

  create() {
    const startButton = this.add.text(
      0,
      0,
      'Start Game',
      { fill: '#0f0' }
      );
    startButton.setInteractive();

    startButton.on('pointerdown', () => {
        this.scene.start('MainScene')
    })
  }
}
