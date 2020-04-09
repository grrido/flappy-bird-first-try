import { Scene } from 'phaser';
import { SCENES, ASSETS } from 'src/config';
import sky from 'src/assets/sky.png';
import wall from 'src/assets/wall.png';
import bird from 'src/assets/bird.png';
import birdFrame1 from 'src/assets/bird-frame-1.png'
import birdFrame2 from 'src/assets/bird-frame-2.png'
import birdFrame3 from 'src/assets/bird-frame-3.png'
import birdFrame4 from 'src/assets/bird-frame-4.png'


class LoadScene extends Scene {
    constructor()
    {
        super({
            key: SCENES.LOAD
        });
    }

    preload = () => {
        this.load.image(ASSETS.SKY, sky);
        this.load.image(ASSETS.WALL, wall);
        this.load.image(ASSETS.BIRD, bird);

        [
            birdFrame1,
            birdFrame2,
            birdFrame3,
            birdFrame4
        ].forEach((frame, key) => {
            this.load.image(`${ASSETS.BIRD}-frame-${key + 1}`, frame);
        })
    };

    create = () => {
        this.scene.start(SCENES.MENU);
    }
}

export default LoadScene;