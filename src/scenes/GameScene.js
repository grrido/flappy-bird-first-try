import { Scene } from 'phaser';
import { SCENES, ASSETS } from 'src/config';
import { Bird, WallGroup } from 'src/components';


class GameScene extends Scene {
    interval = null;
    bird = null;
    wallGroup = null;

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

        this.physics.add.collider(this.bird, this.wallGroup, this.collideBirdWithWall, null, this);

        this.bird.anims.play(this.bird.animationKey, true);

        this.interval = setInterval(this.wallGroup.createWalls, 1000);
    };

    update = () => {
        this.bird.update();
        this.wallGroup.update();
    };

    collideBirdWithWall = () => {
        clearInterval(this.interval);

        this.bird.anims.stop();

        this.physics.pause();
    };
}

export default GameScene;