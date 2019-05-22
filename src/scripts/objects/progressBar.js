export default class FpsText extends Phaser.GameObjects.Text {
  constructor(scene) {
    super(scene, 10, 10, '', {})

    this.progressBar = scene.add.graphics();
    this.progressBox = scene.add.graphics();

    this.progressBox.fillStyle(0x222222, 0.8);
    this.progressBox.fillRect(230, 10, 250, 30);

    this.progressBar.fillStyle(0x0000FF, 1);
    this.progressBar.fillRect(230, 10, 0 * 1, 30);
  }

  update(x) {
    this.progressBar.clear()
    if (x <= 250) {
      this.progressBar.fillRect(230, 10, x * 1, 30);
    }
  }
}
