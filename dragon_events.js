const dragonEvents = [
  { type: 'attack', value: 12, target: 'player-dorkman'},
  { type: 'yawn', value: 40},
  { type: 'eat', target: 'horse'},
  { type: 'attack', value: 23, target: 'player-fluffykins'},
  { type: 'attack', value: 12, target: 'player-dorkman'}
]
const reduceTotal = (prev, value) => (prev || 0) + value
const isAttack = (e => e.type === 'attack')
const totalDamageOnDorkman = dragonEvents
  .filter(isAttack)
  .filter(e => e.target === 'player-dorkman')
  .map(e => e.value)
  .reduce(reduceTotal)

// const totalDamageOnDorkman = dragonEvents
//   .filter(function(event){
//     return event.type === 'attack'
//   })
//   .filter(function(event){
//     return event.target === 'player-dorkman'
//   })
//   .map(function(event){
//     return event.value
//   })
//   .reduce(function(prev, value){
//     return (prev || 0) + value
//   })

  console.log('totalDamageOnDorkman \n', totalDamageOnDorkman)
