export default class Tree extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'phaser-logo')
    scene.add.existing(this)
    // wip
  }
}
