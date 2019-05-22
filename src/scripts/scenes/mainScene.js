import PhaserLogo from '../objects/phaserLogo'
import FpsText from '../objects/fpsText'
import Button from '../objects/button'

export default class MainScene extends Phaser.Scene {
  endGame

  constructor() {
    super({ key: 'MainScene' })
    this.positionOfMole = ['left', 'middle', 'right']
    this.imagesToShow = ['bomb', 'star']
    this.itemsToDisplay = []
    // adds random mole
    for (let index = 0; index < 5; index++) {
      var position = this.positionOfMole[Phaser.Math.Between(0, this.positionOfMole.length - 1)]
      var image = this.imagesToShow[Phaser.Math.Between(0, this.imagesToShow.length - 1)]
      this.itemsToDisplay.push({ position, image })
    }
    console.log(this.itemsToDisplay)
    this.currentItemOnScreen = 0
    this.showMole = this.showMole.bind(this)
    this.mappingPosition = {
      left: [150, 450],
      middle: [450, 450],
      right: [650, 450]
    }
  }

  preload() {
    this.load.spritesheet('dude', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/265548/mole.png', {
      frameWidth: 64,
      frameHeight: 72
    })

    this.load.image('bomb', 'assets/img/bomb.png')

    this.load.image('star', 'assets/img/star.png')
  }
  event() {}

  create() {
    this.endGame = new Button(this, 0,0, "End The Game", () => {
      this.scene.start('EndScene')
    });

    this.rect1 = new Phaser.Geom.Rectangle(100, 400, 200, 200)
    this.rect2 = new Phaser.Geom.Rectangle(350, 400, 200, 200)
    this.rect3 = new Phaser.Geom.Rectangle(600, 400, 200, 200)

    this.graphics = this.add.graphics({ fillStyle: { color: 0x0000ff } })

    this.graphics.fillRectShape(this.rect1)
    this.graphics.setInteractive(this.rect1, this.event)

    this.graphics.fillRectShape(this.rect2)
    this.graphics.setInteractive(this.rect2, this.event)

    this.graphics.fillRectShape(this.rect3)
    this.graphics.setInteractive(this.rect3, this.event)

    this.whakaTimer = this.time.addEvent({
      delay: 1000, // ms
      callback: this.showMole,
      loop: true
    })
  }

  showMole() {
    if (this.currentMole) {
      this.currentMole.destroy()
    }

    if (this.currentItemOnScreen >= this.itemsToDisplay.length) {
      this.whakaTimer.remove()
      return
    }
    const itemToDisplay = this.itemsToDisplay[this.currentItemOnScreen]
    const x = this.mappingPosition[itemToDisplay.position][0]
    const y = this.mappingPosition[itemToDisplay.position][1]
    this.currentMole = this.add.image(x, y, itemToDisplay.image).setScale(5)

    this.currentItemOnScreen++
  }

  update() {}
}
