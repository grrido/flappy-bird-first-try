import { Physics } from 'phaser';
import { GAME, ACTION_KEY_CODES, ACTION_POINTER_CODES } from 'src/config';


class Bird extends Physics.Arcade.Sprite {
    isFlying = false;
    animationKey = 'flying';
    speed = null;

    constructor(scene, texture)
    {
        super(scene, scene.scale.width / 2, scene.scale.height / 2, texture);

        scene.input.keyboard.on(ACTION_KEY_CODES.FLY_START, this.handleFlyStart);
        scene.input.keyboard.on(ACTION_KEY_CODES.FLY_STOP, this.handleFlyStop);
        scene.input.on(ACTION_POINTER_CODES.FLY_START, this.handleFlyStart);
        scene.input.on(ACTION_POINTER_CODES.FLY_STOP, this.handleFlyStop);
        scene.physics.add.existing(this);
        scene.add.existing(this);

        this.setCollideWorldBounds(true);
        this.setBounce(0.2);
        this.setAnimation();
    }

    update = () => {
        this.fly();
    };

    fly = () => {
        const acceleration = 10;

        if (this.isFlying)
        {
            this.body.setVelocityY(this.speed -= acceleration);
        } else {
            this.speed = -GAME.BIRD_SPEED;
        }
    };

    handleFlyStart = () => {
        this.isFlying = true;
    };

    handleFlyStop = () => {
        this.isFlying = false;
    };

    setAnimation = () => {
        const { key: textureKey } = this.texture;
        const frameRate = 8;
        const repeat = -1;

        this.scene.anims.create({
            key: this.animationKey,
            frames: [
                { key: `${textureKey}-frame-1` },
                { key: `${textureKey}-frame-2` },
                { key: `${textureKey}-frame-3` },
                { key: `${textureKey}-frame-4` }
            ],
            frameRate,
            repeat
        });
    }
}

export default Bird;