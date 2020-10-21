//reference for the canvas
const canvas = document.getElementById('canvas');

//ctx will allow for mods on the canvas
const ctx = canvas.getContext('2d');
const gridUnit = 25;
const gridSize = 23;
//score for the points
let score = 0;
//creating the snake array
let snake = [];
//initializing location of the snake in the middle of the canvas
snake[0] = {
  x: Math.floor((gridSize/2))*gridUnit,
  y: Math.floor((gridSize/2))*gridUnit
}

//initializing directional logic
let movment;
document.addEventListener('keydown',direction);
//creating input function
function direction(input){
  //move left
  if(input.keyCode == 37){
    movment = "LEFT";
  }
  //move up
  if(input.keyCode == 38){
    movment = "UP";
  }
  //move right
  if(input.keyCode == 39){
    movment = "RIGHT";
  }
  //move down
  if (input.keyCode == 40){
    movment = "DOWN";
  }
}

//initializing location for the food
let food = {
  x:Math.floor(1 + (Math.random() * (gridSize-1))) * gridUnit,
  y:Math.floor(1 + (Math.random() * (gridSize-1))) * gridUnit
}

//creating the game elements
function draw(){
  //background color
  ctx.fillStyle = 'cyan';
  //initializing the postion and the size of the canvas minus boarder
  ctx.fillRect(gridUnit,gridUnit,gridSize*gridUnit-gridUnit,gridSize*gridUnit-gridUnit);
  //drawing the snake when the length increases
  for(let i=0; i<snake.length;i++){
    ctx.fillStyle='green';
    //initializing the position for the snake
    ctx.fillRect(snake[0].x, snake[0].y, gridUnit,gridUnit);
  }
  //move the snake
  let head = snake[0].x;
  let tail = snake[0].y;

  if (movment == "LEFT")
    snake[0].x -= gridUnit;

  if (movment == "UP")
    snake[0].y -= gridUnit;

  if (movment == "RIGHT")
    snake[0].x += gridUnit;

  if (movment == "DOWN")
    snake[0].y += gridUnit;

  //checks to see when the food was eaten
  if(snake[0].x == food.x && snake[0].y == food.y)
  {
    score += 1;
    food = {
      x:Math.floor(1+(Math.random()*(gridSize-1))) * gridUnit,
      y:Math.floor(1+(Math.random()*(gridSize-1))) * gridUnit
    }
  }

  //creates the icon for the food and the location
  ctx.fillStyle = 'red';
  ctx.fillRect(food.x,food.y,gridUnit, gridUnit);
}



let game = setInterval(draw,100);
