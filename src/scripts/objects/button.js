export default class Button extends Phaser.GameObjects.Text {
  constructor(scene, x, y, text, onTap) {
    super(scene, x, y, text, { color: 'black', fontSize: 28 });
    scene.add.existing(this);
    this.setOrigin(0);

    this.setInteractive();

    this.on('pointerdown', onTap);
  }

  update(scene) {
    // nothing to update
  }
}
