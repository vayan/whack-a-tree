import Button from './button'

export default class Forest extends Phaser.GameObjects.Container {
  constructor(scene, x, y, children) {
    super(scene, x, y, children)
    this.setSize(500, 500)
    scene.add.existing(this)
  }

  addItem(object) {
    object.x = Phaser.Math.RND.between(0, 500)
    object.y = Phaser.Math.RND.between(0, 500)
    this.add(object)
  }

  update(scene) {
  }
}
