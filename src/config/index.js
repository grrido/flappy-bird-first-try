const GAME = {
    WIDTH: 800,
    HEIGHT: 600,
    PHYSICS: 'arcade',
    GRAVITY: {
        X: 0,
        Y: 1000,
    },
    BIRD_SPEED: 200,
    WALL_CREATE_TIMEOUT: 1000,
    WALL_SPEED: 300,
    POINTS: 10
};

const SCENES = {
    LOAD: 'loadScene',
    MENU: 'menuScene',
    GAME: 'gameScene'
};

const ASSETS = {
    BIRD: 'bird',
    WALL: 'wall',
    SKY: 'sky'
};

const ACTION_KEY_CODES = {
    GAME_START: 'keydown-ENTER',
    GAME_RESTART: 'keydown-ENTER',
    FLY_START: 'keydown',
    FLY_STOP: 'keyup',
};

const ACTION_POINTER_CODES = {
    GAME_START: 'pointerdown',
    GAME_RESTART: 'pointerdown',
    FLY_START: 'pointerdown',
    FLY_STOP: 'pointerup',
};

export { GAME, SCENES, ASSETS, ACTION_KEY_CODES, ACTION_POINTER_CODES };