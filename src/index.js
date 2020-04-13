import { Game } from 'phaser';
import { GAME } from 'src/config';
import { LoadScene, MenuScene, GameScene } from 'src/scenes';


const config = {
    type: Phaser.AUTO,
    width: GAME.WIDTH,
    height: GAME.HEIGHT,
    physics: {
        default: GAME.PHYSICS,
        arcade: {
            gravity: {
                x: GAME.GRAVITY.X,
                y: GAME.GRAVITY.Y
            }
        }
    },
    scene: [
        LoadScene,
        MenuScene,
        GameScene
    ]
};

const game = new Game(config);
