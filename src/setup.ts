import RED_BRICK_IMAGE from './images/brick-red.png';
//import BLUE_BRICK_IMAGE from './images/brick-blue.png';
//import GREEN_BRICK_IMAGE from './images/brick-green.png';
// import YELLOW_BRICK_IMAGE from './images/brick-yellow.png';
import BRICK_RETRO_LIGHT from './images/brick_retro2_light.png';
import BRICK_RETRO_MEDIUM from './images/brick_retro2_medium.png';
import BRICK_RETRO_DARK from './images/brick_retro2_dark.png';
import PURPLE_BRICK_IMAGE from './images/brick-purple.png';

// Grab the canvas element for calculating the brick width
// depending on canvas width
const canvas: HTMLCanvasElement | null = document.querySelector('#playField');

// Constants
export const STAGE_PADDING = 10;
export const STAGE_ROWS = 20;
export const STAGE_COLS = 10;
// default padding was 5
export const BRICK_PADDING = 0;
export const BRICK_WIDTH = canvas
  ? Math.floor((canvas.width - STAGE_PADDING * 2) / STAGE_COLS) - BRICK_PADDING
  : 100;
export const BRICK_HEIGHT = canvas
  ? Math.floor((canvas.height - STAGE_PADDING * 2) / STAGE_ROWS) - BRICK_PADDING
  : 30;
export const PADDLE_WIDTH = 150;
export const PADDLE_HEIGHT = 25;
export const PADDLE_STARTX = 450;
export const PADDLE_SPEED = 10;
export const BALL_SPEED = 5;
export const BALL_SIZE = 20;
export const BALL_STARTX = 500;
export const BALL_STARTY = 400;

export const BRICK_IMAGES: { [key: number]: string } = {
  1: RED_BRICK_IMAGE,
  2: BRICK_RETRO_LIGHT,
  3: BRICK_RETRO_MEDIUM,
  4: BRICK_RETRO_DARK,
  5: PURPLE_BRICK_IMAGE
};

export const BRICK_ENERGY: { [key: number]: number } = {
  1: 1, // Red brick
  2: 1, // Green brick
  3: 2, // Yellow brick
  4: 2, // Blue brick
  5: 3 // Purple brick
};

// prettier-ignore
export const LEVEL = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 1, 1, 1, 1, 1, 1, 0, 0,
  0, 2, 2, 2, 2, 2, 2, 2, 2, 0,
  0, 3, 3, 3, 3, 3, 3, 3, 3, 0,
  0, 0, 4, 4, 4, 4, 4, 4, 0, 0,
  0, 0, 5, 5, 0, 0, 5, 5, 0, 0,
];
