const BASE_URL = 'http://138.68.86.49/';

enum SIDE {
  MAN,
  ALIEN,
}

enum EVENT {
  FIRE,
  LEFT,
  RIGHT,
  DOWN,
  UP,
  TOWER,
  NO
}

// Team contacts
const TEAM = {
  EMAIL: 'spaceinvasionlab@yandex.ru'
};

// Game constants
const HALF_LINE_COLOR = 'black';
const HALF_LINE_WIDTH = 2;

const AREA = {
  WIDTH: 960,
  HEIGHT: 640,
  BACKGROUND_IMAGE: '../../../images/game/moonBackground.png',
};

const TOWER = {
  IMAGE_PATH: '../../../images/game/tower.png',
  WIDTH: 50,
  HEIGHT: 100,
  DAMAGE: 10,
  HEALTH: 100,
  SPEED: 1000 * 0.5, // Выстрел каждые 0.5 секунды
  COST: 5, // TODO башни с разной стоимостью
};

const UNIT = {
  MAN_IMAGE_PATH: '../../../images/game/alienUnit.png', // TODO: Other image for mans
  ALIEN_IMAGE_PATH: '../../../images/game/alienUnit.png',
  HEALTH: 100,
  WIDTH: 50,
  HEIGHT: 50,
  DAMAGE: 10,
  SPEED: 5,
  SPAWN_OFFSET: 30,
};

const BOT = {
  FIRE_SPEED: 1000 * 0.5, // Выстрел каждые 0.5 секунды
  AMPLITUDE: 300,
  TOWER_SPEED: 1000 * 2, // Установка башни каждые 2 секунды (если есть деньги на это)
  RANDOM_TOWER_SPEED: 1000 * 5, // Бесплатная установка башни в случайном месте поля каждые 5 секунд
};

const FPS = 1000 / 120; // 120 fps

const COIN = {
  IMAGE_PATH: '../../../images/game/coin.png',
  WIDTH: 30,
  HEIGHT: 30,
  COST: 10,
  TICKS: 10,
  LIFE_TIME: 10,
  DEFAULT: 3,
};

const BULLET = {
  IMAGE_PATH: '../../../images/game/bullet.png',
  WIDTH: 25,
  HEIGHT: 25,
  DAMAGE: 10,
  SPEED: 6,
  INTERVAL: 1,
  TICKS: 10,
  LIFE_TIME: 3000,
};

// Bombs
const BOMB = {
  IMAGE_PATH: '../../../images/game/bomb.png',
  WIDTH: 30,
  HEIGHT: 30,
  LIFE_TIME: 10,
  DAMAGE: 1,
  TICKS: 10,
};

// Bases
const BASE = {
  HEALTH: 3,
  IMAGE_PATH: '../../../images/game/base.png',
  WIDTH: 110,
  HEIGHT: 110,
  OFFSET: 5,
};

// Fonts
const DEFAULT_FONT = 'italic 20pt Arial';

const ACTION_MAPPER = new Map<string, EVENT>();
[
  [EVENT.FIRE, [' ', 'Enter']],
  [EVENT.LEFT, ['a', 'A', 'ф', 'Ф', 'ArrowLeft']],
  [EVENT.RIGHT, ['d', 'D', 'в', 'В', 'ArrowRight']],
  [EVENT.DOWN, ['s', 'S', 'ы', 'Ы', 'ArrowDown']],
  [EVENT.UP, ['w', 'W', 'ц', 'Ц', 'ArrowUp']],
  [EVENT.TOWER, ['Shift']],
].forEach(row => (row[1] as string[]).forEach(el => ACTION_MAPPER.set(el, row[0] as EVENT)));

const PATH_MAP = new Map<string, string>();
[
  ['/', 'home'],
  ['/login', 'login'],
  ['/about', 'about'],
  ['/signup', 'signup'],
  ['/profile', 'profile'],
  ['/leaderboard', 'leaderboard'],
  ['/game', 'game'],
].forEach(value => PATH_MAP.set(value[0], value[1]));

export {
  BASE_URL, SIDE, TEAM, AREA,
  TOWER, UNIT, BOT, COIN, BULLET, BOMB, BASE,
  HALF_LINE_COLOR, HALF_LINE_WIDTH, DEFAULT_FONT, // Styles
  ACTION_MAPPER, PATH_MAP, EVENT, FPS // Routing
}