// Grab Elements
const canvas = document.querySelector(`#etch-a-sketch`);
const shakeButton = document.querySelector(`.shake-button`);
const colorButtons = document.querySelectorAll(`.color`);
const sizeButtons = document.querySelectorAll(`.size`);

// Constants
const MOVE_TO = 20;

// Create 2D Context and Setup Canvas for Drawing
const ctx = canvas.getContext(`2d`, `alpha`);

ctx.lineCap = `square`;
ctx.lineJoin = `miter`;
ctx.lineWidth = 20;

// Random Starting Point
const {width, height} = canvas;
ctx.beginPath();
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
ctx.moveTo(x,y);
ctx.lineTo(x,y);
ctx.stroke();

// Draw Function
function draw({key, color}) {
  ctx.strokeStyle = `${color}`;
  ctx.beginPath();
  ctx.moveTo(x,y);
  switch (key) {
    case `ArrowUp`:
      y -= MOVE_TO;
      break;
    case `ArrowDown`:
      y += MOVE_TO;
      break;
    case `ArrowRight`:
      x += MOVE_TO;
      break;
    case `ArrowLeft`:
      x -= MOVE_TO;
    default:
      break;
    };
  ctx.lineTo(x,y);
  ctx.stroke();
}

// Reset/Shake Function
function resetCanvas() {
  canvas.classList.add(`shake`);
  ctx.clearRect(0,0,width, height);
  canvas.addEventListener(`animationend`, () => {
    canvas.classList.remove(`shake`);
  }, { once: true });
  x = Math.floor(Math.random() * width);
  y = Math.floor(Math.random() * height);
  ctx.strokeStyle = `hsl(0, 0%, 0%)`;
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(x,y);
  ctx.stroke();
};


// Key Handler
function keyHandler(e) {
  if (e.key.includes(`Arrow`)) {
    e.preventDefault;
    draw({key: e.key});
  }
};

// Color Button Click Handler
function colorButtonHandler(e) {
  draw({color: e.target.dataset.color});
}

// Size Button Click Handler
function sizeButtonHandler(e) {
  if (e.target.id === `plus`) {
    ctx.lineWidth += 10;
  }
}

// Listening For Arrow Keys
window.addEventListener(`keydown`, keyHandler);

// Listening For Button Click
shakeButton.addEventListener(`click`, resetCanvas);

// method for assigning EL to each button and binding function to each
colorButtons.forEach(colorButton => {
  colorButton.addEventListener(`click`, colorButtonHandler);
})

sizeButtons.forEach(sizeButton => {
  sizeButton.addEventListener(`click`, sizeButtonHandler)
})