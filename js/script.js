//reference for the canvas
const canvas = document.getElementById('canvas');

//ctx will allow for mods on the canvas
const ctx = canvas.getContext('2d');
const gridUnit = 19;
const gridSize = 20;
let gridmod = (gridSize-1)*gridUnit;
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
  if(input.keyCode == 37 && movment != 'RIGHT'){
    movment = "LEFT";
  }
  //move up
  if(input.keyCode == 38 && movment != 'DOWN'){
    movment = "UP";
  }
  //move right
  if(input.keyCode == 39 && movment != 'LEFT'){
    movment = "RIGHT";
  }
  //move down
  if (input.keyCode == 40 && movment != 'UP'){
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
  ctx.fillStyle = 'black';
  //initializing the postion and the size of the canvas minus boarder
  ctx.fillRect(gridUnit,gridUnit,gridSize*gridUnit-gridUnit,gridSize*gridUnit-gridUnit);
  //drawing the snake when the length increases
  for(let i=0; i<snake.length;i++){
    ctx.fillStyle='yellow';
    //initializing the position for the snake
    ctx.fillRect(snake[i].x, snake[i].y, gridUnit,gridUnit);
  }
  //move the snake
  let pointX = snake[0].x;
  let pointY = snake[0].y;

  if (movment == "LEFT")
    pointX -= gridUnit;

  if (movment == "UP")
    pointY -= gridUnit;

  if (movment == "RIGHT")
    pointX += gridUnit;

  if (movment == "DOWN")
    pointY += gridUnit;

  //checks to see when the food was eaten
  if(pointX == food.x && pointY == food.y)
  {
    score += 1;
    food = {
      x:Math.floor(1+(Math.random()*(gridSize-1))) * gridUnit,
      y:Math.floor(1+(Math.random()*(gridSize-1))) * gridUnit
    }
  }else {
    snake.pop();
  }

  document.querySelector("#score").innerText = score;
  //updating the size of the snake
  let updateSnake = {x:pointX,y:pointY};

  function collision(head,array){
    for(let i = 0; i <array.length; i++){
      if (head.x == array[i].x && head.y == array[i].y){
        return true;
      }
    }
    return false;
  }
  if (pointX < gridUnit || pointY < gridUnit ||
        pointX > gridmod || pointY > gridmod || collision(updateSnake, snake)) {
          clearInterval(game);

  }
   snake.unshift(updateSnake);
  //creates the icon for the food and the location
  ctx.fillStyle = 'white';
  ctx.fillRect(food.x,food.y,gridUnit, gridUnit);

}



let game = setInterval(draw,100);
