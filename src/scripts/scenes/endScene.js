import Button from '../objects/button'

export default class EndScene extends Phaser.Scene {
  restartButton

  constructor() {
    super({ key: 'EndScene' })
  }

  preload() {
  }

  create() {
    this.restartButton = new Button(
      this,
      this.cameras.main.width / 2 - 140,
      this.cameras.main.height / 2,
      "Restart The Game", () => {
        this.scene.start('MainScene')
    });
  }
}
