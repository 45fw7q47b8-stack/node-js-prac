const fs = require('fs');

fs.readFile('blog1.txt', 'utf8', (err, data) => { 
  if (err) {
    return console.error(err);
  }
  console.log(data);
});

console.log('Reading file...');
