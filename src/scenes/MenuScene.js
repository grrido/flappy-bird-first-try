import { Scene } from 'phaser';
import { Bird } from 'src/components';
import { SCENES, ASSETS, ACTION_KEY_CODES, ACTION_POINTER_CODES } from 'src/config';


const style = {
    font: '24px Arial',
    fill: '#fff'
};

class MenuScene extends Scene {
    constructor()
    {
        super({
            key: SCENES.MENU
        });
    }

    create = () => {
        const text = 'Press enter to start';

        this.add.image(this.scale.width / 2, this.scale.height / 2, ASSETS.SKY);
        this.add.text(this.scale.width / 2, this.scale.height / 2, text, style).setOrigin(0.5);

        const bird = new Bird(this, ASSETS.BIRD);

        bird.setPosition(525, this.scale.height / 2);
        bird.body.setAllowGravity(false);
        bird.anims.play(bird.animationKey);
        bird.setScale(0.6);

        this.input.keyboard.on(ACTION_KEY_CODES.GAME_START, () => this.scene.start(SCENES.GAME));
        this.input.on(ACTION_POINTER_CODES.GAME_START, () => this.scene.start(SCENES.GAME));
    };
}

export default MenuScene;