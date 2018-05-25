const randomItem = require('./pick_random_item');

const makeDragon = () => {
  const dragonSizes = ['big', 'medium', 'tiny'];
  const dragonAbilities = ['fire', 'ice', 'lightning'];
  return randomItem(dragonSizes) + ' ' +
          randomItem(dragonAbilities) + ' ' +
          'dragon'
}

module.exports = makeDragon;
