import { Game } from 'phaser';
import { LoadScene, MenuScene, GameScene } from 'src/scenes';


const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { x: 0, y: 1000 }
        }
    },
    scene: [
        LoadScene,
        MenuScene,
        GameScene
    ]
};

const game = new Game(config);
