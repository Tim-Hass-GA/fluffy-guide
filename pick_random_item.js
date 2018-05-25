const randomNumber = require('random-number');

function randomItem(arr){
  const randomIndex = randomNumber({
    min: 0,
    max: arr.length - 1,
    integer: true
  })
  return arr[randomIndex];
}

module.exports = randomItem;
