import { Scene } from 'phaser';
import { SCENES, ASSETS } from 'src/config';


class MenuScene extends Scene {
    constructor()
    {
        super({
            key: SCENES.MENU
        });
    }

    create = () => {
        const text = 'Press button to start';
        const style = {
            font: '24px Arial',
            fill: '#fff'
        };

        this.add.image(this.scale.width / 2, this.scale.height / 2, ASSETS.SKY);
        this.add.text(this.scale.width / 2, this.scale.height / 2, text, style).setOrigin(0.5);

        this.input.keyboard.on('keydown', () => this.scene.start(SCENES.GAME));
    };
}

export default MenuScene;