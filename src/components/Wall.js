import { Physics } from 'phaser';
import { GAME } from 'src/config';


class Wall extends Physics.Arcade.Sprite {
    constructor(scene, position, texture)
    {
        super(scene, 0, 0, texture);

        this.setOrigin(0, 0);
        this.setPosition(scene.scale.width, this.height * position);

        scene.physics.add.existing(this);
        scene.add.existing(this);

        this.body.setAllowGravity(false);
        this.body.setImmovable(true);
    }

    update = () => {
        this.body.setVelocityX(-GAME.WALL_SPEED);

        if(this.body.position + this.width < 0) {
            // this.destroy(true);
            this.disableBody(true);
        }
    };
}

export default Wall;