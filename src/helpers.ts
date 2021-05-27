import { Brick } from './sprites/Brick'
import {
  BRICK_IMAGES,
  LEVEL,
  STAGE_COLS,
  STAGE_PADDING,
  BRICK_WIDTH,
  BRICK_HEIGHT,
  BRICK_PADDING,
  BRICK_ENERGY
} from './setup'

export function createBricks(): Brick[] {
  // reduce instead of map => loop through every item of LEVEL, but strip out the zeros
  return LEVEL.reduce((acc, cell, i) => {
    const row = Math.floor((i + 1) / STAGE_COLS)
    const col = i % STAGE_COLS

    // get position of brick
    const x = STAGE_PADDING + col * (BRICK_WIDTH + BRICK_PADDING)
    const y = STAGE_PADDING + row * (BRICK_HEIGHT + BRICK_PADDING)

    // skip, if element is zero (0) => don't put new element  into array
    if (cell === 0) return acc

    // return brick with specific energy level
    return [
      ...acc, // spread to keep previous values from array of bricks
      new Brick(
        BRICK_WIDTH,
        BRICK_HEIGHT,
        {x, y},
        BRICK_ENERGY[cell], // lookup energy level for element from lookup object
        BRICK_IMAGES[cell] // lookup image for element from lookup object
      )
    ]
  }, [] as Brick[])
}