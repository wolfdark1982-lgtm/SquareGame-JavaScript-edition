const square = document.createElement('div');
square.style.width = '150px';
square.style.height = '150px';
square.style.backgroundColor = 'grey';
square.style.position = 'absolute';
document.body.appendChild(square);

let positionX = 0;
let positionY = 0;
const speed = 10;

document.addEventListener('keydown', (event) => {
  // Horizontal Movement (A/D or Left/Right Arrows)
  if (event.key === 'a' || event.key === 'A' || event.key === 'ArrowLeft') {
    positionX -= speed;
    square.style.left = positionX + 'px';
  } else if (event.key === 'd' || event.key === 'D' || event.key === 'ArrowRight') {
    positionX += speed;
    square.style.left = positionX + 'px';
  }

  // Vertical Movement (W/S or Up/Down Arrows)
  if (event.key === 'w' || event.key === 'W' || event.key === 'ArrowUp') {
    positionY -= speed;
    square.style.top = positionY + 'px';
  } else if (event.key === 's' || event.key === 'S' || event.key === 'ArrowDown') {
    positionY += speed;
    square.style.top = positionY + 'px';
  }
});
