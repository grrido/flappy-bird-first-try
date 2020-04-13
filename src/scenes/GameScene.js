import { Scene } from 'phaser';
import { GAME, SCENES, ASSETS, ACTION_KEY_CODES, ACTION_POINTER_CODES } from 'src/config';
import { Bird, WallGroup } from 'src/components';


class GameScene extends Scene {
    interval = null;
    bird = null;
    wallGroup = null;
    score = null;
    points = 0;
    endGame = null;

    constructor()
    {
        super({
            key: SCENES.GAME,
        });
    }

    create = () => {
        this.add.image(this.scale.width / 2, this.scale.height / 2, ASSETS.SKY);

        this.bird = new Bird(this, ASSETS.BIRD);
        this.wallGroup = new WallGroup(this, ASSETS.WALL);

        this.physics.add.overlap(this.bird, this.wallGroup, this.collideBirdWithWall, null, this);

        this.interval = setInterval(this.wallGroup.createWalls, GAME.WALL_CREATE_TIMEOUT);

        this.bird.anims.play(this.bird.animationKey, true);

        this.setScore();
    };

    update = () => {
        this.bird.update();
        this.wallGroup.update();
    };

    restart = () => {
        this.interval = null;
        this.bird = null;
        this.wallGroup = null;
        this.score = null;
        this.points = 0;
        this.endGame = null;

        this.children.removeAll(false);

        this.scene.restart();
    };

    collideBirdWithWall = (bird, wall) => {
        if(wall.visible) {
            this.physics.pause();

            clearInterval(this.interval);

            this.bird.anims.stop();

            this.setEndGame();

            this.input.keyboard.on(ACTION_KEY_CODES.GAME_RESTART, this.restart);
            this.input.on(ACTION_POINTER_CODES.GAME_RESTART, this.restart);
        } else {
            wall.disableBody(true);
            this.setScore(GAME.POINTS);
        }
    };

    setScore = (points = 0) => {
        const text = `Score: ${this.points += points}`;
        const style = {
            font: '24px Arial',
            fill: '#fff'
        };

        if(this.score) {
            this.score.destroy();
        }

        this.score = this.add.text(10, 10, text, style);
    };

    setEndGame = () => {
        const text = 'Press enter to restart';
        const style = {
            font: '24px Arial',
            fill: '#fff'
        };

        this.endGame = this.add.text(this.scale.width / 2, this.scale.height / 2, text, style).setOrigin(0.5);
    };
}

export default GameScene;