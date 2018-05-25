var fs = require('fs');
// import fs from 'fs'

var output = fs.readFileSync('data.txt', 'utf8')
  .trim()
  .split('\n')
  .map( (line) => line.split(' ') )
  .reduce((customers, line) => {
    // console.log('yo',line);
    customers[line[0]] = customers[line[0]] || [];
    customers[line[0]].push({
      item: line[1],
      price: line[2],
      quantity: line[3]
    });

    return customers;
  }, {});


console.log('output', JSON.stringify(output, null, 2))
