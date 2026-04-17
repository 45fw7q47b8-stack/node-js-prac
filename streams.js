const fs  = require('fs');


const readStream = fs.createReadStream('./blog1.txt', {'encoding': 'utf8'});
const writeStream = fs.createWriteStream('./blog4.txt');

readStream.on('data', (chunk) => {
    console.log('------new chunk----------');
    console.log(chunk.toString());
    writeStream.write('\nNew chunk\n');
    writeStream.write(chunk);
});


readStreeam.pipe(writeStream);