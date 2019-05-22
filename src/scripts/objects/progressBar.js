export default class FpsText extends Phaser.GameObjects.Text {
  constructor(scene) {
    super(scene, 10, 10, '', {})

    this.progressBar = scene.add.graphics();
    this.progressBox = scene.add.graphics();

    this.progressBox.fillStyle(0x222222, 0.8);
    this.progressBox.fillRect(240, 270, 320, 50);

    this.progressBar.fillStyle(0x0000FF, 1);
    this.progressBar.fillRect(250, 280, 0 * 1, 30);
  }

  update(x) {
    this.progressBar.clear()
    this.progressBar.fillRect(250, 280, x * 1, 30);
  }
}
