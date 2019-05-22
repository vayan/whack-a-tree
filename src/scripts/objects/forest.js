export default class Forest extends Phaser.GameObjects.Text {
  constructor(scene, x, y) {
    super(scene, x, y, 'ima forest', { color: 'black', fontSize: 28 })
    scene.add.existing(this)
    this.setOrigin(0)
  }

  update(scene) {
    this.setText(`fps: ${Math.floor(scene.game.loop.actualFps)}`)
  }
}
