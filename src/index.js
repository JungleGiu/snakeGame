"use strict";

 const foodRandomPosition = () => {
  return {
    x: Math.floor(Math.random() * 20),
    y: Math.floor(Math.random() * 20),
  };
};

const viewFood = () => {
  const foodPosition = foodRandomPosition();
  document.querySelector("#food").style.gridRow = foodPosition.y;
  document.querySelector("#food").style.gridColumn = foodPosition.x;
};
window.onload = viewFood;

const snakeElement = document.querySelector("#snake")
const snakeComputedStyle = getComputedStyle(snakeElement)

let snakeY = snakeComputedStyle.gridRow;
let snakeX = snakeComputedStyle.gridColumn

let snakePosition = {
  x: {
    left: parseInt(snakeX.split('/')[0]),
    right: parseInt(snakeX.split('/')[1])
},
  y: {
    up: parseInt(snakeY.split('/')[0]),
    down: parseInt(snakeY.split('/')[1])
  },
};
console.log(snakePosition)

const determineDirection = (position) => {
    return position.y.down - position.y.up === 1 ?  'hor' : 'ver' }

console.log(determineDirection(snakePosition))
const continousMovement = () => {
setInterval(() => {
let snakeDir = determineDirection(snakePosition) 
if (snakeDir === 'hor' && snakePosition.x.right <= 21){
    snakePosition.x.left++
    snakePosition.x.right++
   snakeElement.style.gridColumn =`${snakePosition.x.left} / ${snakePosition.x.right}`
} 

if (snakeDir === 'hor' && snakePosition.x.right > 21 ) {
    snakePosition.x.left = 1
    snakePosition.x.right = 3
    snakeElement.style.gridColumn =`${snakePosition.x.left} / ${snakePosition.x.right}`
   
}},
1000)
}

continousMovement();
