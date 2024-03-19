function getRandomStar(count, maxArea, minArea, starSize) {
  let boxShadowStyle = (minArea + Math.floor(Math.random()*maxArea))+ 'px ' + (minArea + Math.floor(Math.random()*maxArea)) + 'px ' + 0 + ' ' + starSize + ' ' + 'rgba(255, 255, 255, ' + Math.random() + ')';
  for(let i=0; i< count; i++) {
    boxShadowStyle = boxShadowStyle + ', ' + (minArea + Math.floor(Math.random()*maxArea))+ 'px ' + (minArea + Math.floor(Math.random()*maxArea)) + 'px ' + 0 + ' ' + starSize + ' ' + 'rgba(255, 255, 255, ' + Math.random() + ')';
  }
  return boxShadowStyle
}

export function $() {
  let style = document.createElement('style');
  document.head.appendChild(style);
  let sheet = style.sheet;
  let asteroidBeltStars = getRandomStar(1000, 1000, '5px', '-5px');
  sheet.insertRule('.asteroid-belt::before {box-shadow: ' + asteroidBeltStars + '}');
  let wholeBackgroundStars = getRandomStar(2000, 3000, 0, 0);
  sheet.insertRule('.solar-syst::after {position:absolute; box-shadow: ' + wholeBackgroundStars + ' }');
}