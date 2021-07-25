import "phaser"

export default class PlayScene extends Phaser.Scene {
    constructor() {
        super("PlayScene")
    }

    preload() {

    }

    create() {
        var height = this.game.config.height;
        var width = this.game.config.width;
        this.add.image(Number(width) / 2, Number(height) / 2, "logo");
    }
}