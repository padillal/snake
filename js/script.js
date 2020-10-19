//reference for the canvas
const canvas = document.getElementById('canvas');

//ctx will allow for mods on the canvas
const ctx = canvas.getContext('2d');
const gridUnit = 25;
const gridSize = 23;

//creating the snake array
let snake = [];
//initializing location of the snake in the middle of the canvas
snake[0] = {
  x: Math.floor((gridSize/2)*gridUnit), y:Math.floor((gridSize/2)*gridUnit)
}

//creating a background
function draw(){
  //background color
  ctx.fillStyle = 'red';
  //initializing the postion and the size of the canvas minus boarder
  ctx.fillRect(gridUnit,gridUnit,gridSize*gridUnit-gridUnit,gridSize*gridUnit-gridUnit);
  //drawing the snake when the length increases
  for(let i=0; i<snake.length;i++){
    ctx.fillStyle='green';
    //initializing the position for the snake
    ctx.fillRect(snake[0].x, snake[0].y, gridUnit,gridUnit);
  }

}



let game = setInterval(draw,100);
