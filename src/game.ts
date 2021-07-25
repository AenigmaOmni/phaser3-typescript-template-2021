import "phaser"
import BootScene from "./boot"
import PlayScene from "./play"

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    scene: [BootScene, PlayScene]
};

const game = new Phaser.Game(config);
