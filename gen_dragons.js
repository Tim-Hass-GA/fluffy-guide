const make_dragons = require('./make_a_dragon');

// let dragons = [];
// for (let i = 0; i < 3; i++){
//   let dragon = make_dragons();
//   dragons.push(dragon);
// }
//
// console.log(dragons);

// let dragon = make_dragons();
// console.log(dragon);

const dragonArmy = {
  [Symbol.iterator]: () => {
    return {
      next: () => {
        const enoughDragonsSpawned = Math.random() > 0.75;
        if (!enoughDragonsSpawned)
          return {
            value: make_dragons(),
            done: false
          }
        return { done: true }
      }
    }
  }
}

for (const dragon of dragonArmy) {
  console.log(dragon);
}
