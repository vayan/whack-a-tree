import Button from '../objects/button'

export default class StartScene extends Phaser.Scene {
  startButton

  constructor() {
    super({ key: 'StartScene' })
  }

  preload() {
    this.load.image('logo', 'assets/img/logo.png')
  }

  create() {
    this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2 - 300, 'logo')

    this.startButton = new Button(
      this,
      this.cameras.main.width / 2 - 80,
      this.cameras.main.height / 2,
      'Start Game',
      () => { this.scene.start('MainScene') }
      )
  }
}
