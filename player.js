const square=document.createElement('div');
square.style.width='150px';
square.style.height='150px';
square.style.backgroundColor='grey';
square.style.position = 'absolute';
document.body.appendChild(square);
let positionX = 0;
let positionY = 0;
const speed = 10;
document.addEventListener('keydown', (event) => {
  if (event.key === 'a' || event.key === 'A') {
    positionX -= speed;
    square.style.left = positionX + 'px';
  } else if (event.key === 'd' || event.key === 'D') {
    positionX += speed;
    square.style.left = positionX + 'px';
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft' || event.key === 'A') {
    positionX -= speed;
    square.style.left = positionX + 'px';
  } else if (event.key === 'ArrowRight' || event.key === 'D') {
    positionX += speed;
    square.style.left = positionX + 'px';
  }
    if (event.key === 'w' || event.key === 'A') {
    positionY -= speed;
    square.style.top = positionY + 'px';
  } else if (event.key === 's' || event.key === 'D') {
    positionY += speed;
    square.style.top = positiony + 'px';
  }
    if (event.key === 'ArrowUp' || event.key === 'A') {
    positionY -= speed;
    square.style.top = positionY + 'px';
  } else if (event.key === 'ArrowDown' || event.key === 'D') {
    positionY += speed;
    square.style.top = positiony + 'px';
  }
