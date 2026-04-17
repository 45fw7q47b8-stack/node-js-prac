const fs = require('fs');

//fs.readFile('blog1.txt', 'utf8', (err, data) => { 
 // if (err) {
   // return console.error(err);
 // }
//  console.log(data);
//});

//console.log('Reading file...');


//fs.writeFile('blog1.txt', 'Hello, World!', (err) => {
 // console.log('File has been written');
  //});
  
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('folder created');
});
}
else {  fs.rmdir('./assets', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('folder deleted');
});
}

if (fs.existsSync('./deleteme.txt')) {
    fs.unlink('./deleteme.txt', (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('File deleted');
    });

}