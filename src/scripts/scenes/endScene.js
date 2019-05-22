export default class EndScene extends Phaser.Scene {
  constructor() {
    super({ key: 'EndScene' })
  }

  preload() {
  }

  create() {
    this.add.text(
      0,
      0,
      'Ended',
      { fill: '#0f0' }
    );

    const retryButton = this.add.text(
      200,
      0,
      'Retry Game',
      { fill: '#0f0' }
    );
    retryButton.setInteractive();

    retryButton.on('pointerdown', () => {
      this.scene.start('MainScene')
    })
  }
}
