import "phaser"

export default class BootScene extends Phaser.Scene {

    constructor() {
        super("BootScene");
    }

    preload() {
        this.load.image('logo', 'assets/phaser3-logo.png');
    }

    create() {
        this.scene.start("PlayScene")
    }

}