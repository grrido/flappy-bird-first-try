import { GameObjects } from 'phaser';
import { Wall } from 'src/components/index';


class WallGroup extends GameObjects.Group {
    scene = null;
    texture = null;

    constructor(scene, texture)
    {
        super(scene);

        this.scene = scene;
        this.texture = texture;
    }

    update = () => {
        this.children.iterate((children) => {
            if(children) {
                children.update();
            } else {
                this.remove(children);
            }
        });
    };

    createWalls = () => {
        const randomPosition = Math.floor(Math.random() * 3) + 3;
        const emptyPosition = [randomPosition - 1, randomPosition, randomPosition + 1];

        for(let i = 0; i < 10; i++) {
            if(emptyPosition.includes(i)) {
                continue;
            }

            const wall = new Wall(this.scene, i, this.texture);
            this.add(wall, true);
        }
    };
}

export default WallGroup;