import PhaserLogo from '../objects/phaserLogo'
import FpsText from '../objects/fpsText'
import progressBar from '../objects/progressBar'
import Button from '../objects/button'
import Forest from '../objects/forest'

export default class MainScene extends Phaser.Scene {
  endGame
  score
  forest

  constructor() {
    super({ key: 'MainScene' })
    this.positionOfMole = ['left', 'middle', 'right']
    this.imagesToShow = ['bomb', 'star']
    this.goodItems = ['bomb']
    this.itemsToDisplay = []
    // adds random mole
    for (let index = 0; index < 5; index++) {
      var position = this.positionOfMole[Phaser.Math.Between(0, this.positionOfMole.length - 1)]
      var image = this.imagesToShow[Phaser.Math.Between(0, this.imagesToShow.length - 1)]
      this.itemsToDisplay.push({ position, image, isGood: this.goodItems.includes(image) })
    }
    console.log(this.itemsToDisplay)
    this.currentItemOnScreen = 0
    this.showMole = this.showMole.bind(this)
    this.onMoleTapped = this.onMoleTapped.bind(this)
    this.showTimer = this.showTimer.bind(this)
    this.mappingPosition = {
      left: [80, 750],
      middle: [240, 750],
      right: [400, 750]
    }
    this.countdownValue = 60
    this.score = 11111
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
    this.progressBar = new progressBar(this)
    this.fpsText = new FpsText(this)

    this.countdownTimer = this.time.addEvent({
      delay: 1000, // ms
      callback: this.showTimer,
      loop: true
    })

    this.endGame = new Button(this, 0, 0, 'End The Game', () => {
      this.scene.start('EndScene', { score: this.score })
    })

    this.forest = new Forest(this, 10, 100)

    const Y_POSITION_SQUARES = 700
    const SQUARE_SIDE = 130

    this.rect1 = new Phaser.Geom.Rectangle(30, Y_POSITION_SQUARES, SQUARE_SIDE, SQUARE_SIDE)
    this.rect2 = new Phaser.Geom.Rectangle(190, Y_POSITION_SQUARES, SQUARE_SIDE, SQUARE_SIDE)
    this.rect3 = new Phaser.Geom.Rectangle(350, Y_POSITION_SQUARES, SQUARE_SIDE, SQUARE_SIDE)

    this.graphics = this.add.graphics({ fillStyle: { color: 0x0000ff } })

    this.graphics.fillRectShape(this.rect1)

    this.graphics.fillRectShape(this.rect2)

    this.graphics.fillRectShape(this.rect3)

    this.whakaTimer = this.time.addEvent({
      delay: 3000, // ms
      callback: this.showMole,
      loop: true
    })
  }

  onMoleTapped(pointer, gameObject) {
    // we need to dicrease because the counter is increased because this gets executed
    const displayedItem = this.itemsToDisplay[this.currentItemOnScreen - 1]
    console.log(displayedItem)
    if (displayedItem.isGood) {
      // forest.addItem(displayedItem)
      this.feedBackText = this.add
        .text(200, 850, 'Nice', { fontFamily: '"Roboto Condensed"' })
        .setFontSize(36)
        .setBackgroundColor('#27ae60')
        .setColor('#FFFFFF')
      //this.feedBackText.destroy()
    } else {
      this.feedBackText = this.add
        .text(200, 850, 'Bad', { fontFamily: '"Roboto Condensed"' })
        .setFontSize(36)
        .setBackgroundColor('#e74c3c')
        .setColor('#FFFFFF')
    }
    this.currentMole.destroy()

    // console.log(pointer)
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
    this.currentMole.setInteractive()
    this.input.on('gameobjectdown', this.onMoleTapped)

    this.currentItemOnScreen++
  }

  showTimer() {
    if (!this.countdownValue) {
      this.countdownTimer.remove()
      return
    }
    this.fpsText.update(this, this.countdownValue, 0)
    this.countdownValue--
  }

  update() {}
}
