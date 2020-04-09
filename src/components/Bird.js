import { Physics } from 'phaser';


class Bird extends Physics.Arcade.Sprite {
    isFlying = false;
    animationKey = 'flying';
    speed = null;

    constructor(scene, texture)
    {
        super(scene, scene.scale.width / 2, scene.scale.height / 2, texture);

        scene.input.keyboard.on('keydown', this.handleKeydown);
        scene.input.keyboard.on('keyup', this.handleKeyup);
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
        if (this.isFlying)
        {
            this.body.setVelocityY(this.speed -= 10);
        } else {
            this.speed = -200;
        }
    };

    handleKeydown = () => {
        this.isFlying = true;
    };

    handleKeyup = () => {
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