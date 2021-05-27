import { CanvasView } from './view/CanvasView'
import { Ball } from './sprites/Ball'
import { Brick } from './sprites/Brick'
import { Paddle } from './sprites/Paddle'
import { Collision } from './Collision'
// images
import PADDLE_IMAGE from './images/paddle.png'
import BALL_IMAGE from './images/ball.png'
// Level + Colors
import {
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  PADDLE_SPEED,
  PADDLE_STARTX,
  BALL_SPEED,
  BALL_SIZE,
  BALL_STARTX,
  BALL_STARTY
} from './setup'

// Helpers
import { createBricks } from './helpers'

let gameOver = false
let score = 0

function setGameOver(view: CanvasView) {
  view.drawInfo('Game Over!')
  gameOver = false
}

function setGameWin(view: CanvasView) {
  view.drawInfo('Game Won!')
  gameOver = false
}

function gameLoop(
  view: CanvasView,
  bricks: Brick[],
  paddle: Paddle,
  ball: Ball,
  collision: Collision
  )
  {
    view.clear()
    view.drawBricks(bricks)
    view.drawSprite(paddle)
    view.drawSprite(ball)

    // Move ball
    ball.moveBall()

    // Move paddle and check so it won't exit the playfield
    if (
      // check, if paddle is inside canvas at it's left border
      (paddle.isMovingLeft && paddle.pos.x > 0) ||
      // check, if paddle is inside canvas at it's right border
      (paddle.isMovingRight && paddle.pos.x < view.canvas.width - paddle.width)
      ) {
        paddle.movePaddle()
    }

    collision.checkBallCollision(ball, paddle, view)
    const collidingBrick = collision.isCollidingBricks(ball, bricks)

    if (collidingBrick) {
      score += 1
      view.drawScore(score)
    }

    requestAnimationFrame(() => gameLoop(view, bricks, paddle, ball, collision))
  }

function startGame(view: CanvasView) {
  // Reset Displays
  score = 0
  view.drawInfo('')
  view.drawScore(0)

  // Create collision instance
  const collision = new Collision()

  // Create all bricks
  const bricks = createBricks()

  // Create a ball
  const ball = new Ball(
    BALL_SPEED,
    BALL_SIZE,
    {
      x: BALL_STARTX,
      y: BALL_STARTY
    },
    BALL_IMAGE
  )

  // create a paddle
  const paddle = new Paddle(
    PADDLE_SPEED,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    {
      x: PADDLE_STARTX,
      y: view.canvas.height - PADDLE_HEIGHT - 5
     },
     PADDLE_IMAGE
    )

  gameLoop(view, bricks, paddle, ball, collision)
}

// create a new view

const view = new CanvasView('#playField')
view.initStartButton(startGame)