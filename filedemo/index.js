const fs = require('fs');

const courses ={
        id:3,
        name:'Ganesh',
        email:'ganeshnaidu@gmail.com'
    }
var input = fs.createReadStream('sample.txt');

var r1 = require('readline').createInterface({
    input: input
});

var data="";
for(var attributename in courses){
    data+=`${attributename}:${courses[attributename]}\n`;
}

// fs.unlinkSync('sample.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
//   });

  fs.writeFileSync('sample.txt', data, { overwrite: false }, function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
  });

// r1.on('line', function(line) {
//     var ar = line.split(":");
//     var data = `${ar[0]}:${courses[ar[0]]}\n`;
//     fs.appendFileSync('sample.txt',data, 'utf8',
//     // callback function
//     function(err) { 
//         if (err) throw err;
//         // if no error
//         console.log("Data is appended to file successfully.");
// });
// });
// fs.unlinkSync('sample.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
//   });
//   fs.renameSync('sample1.txt', 'sample.txt', function (err) {
//     if (err) throw err;
//     console.log('File Renamed!');
//   });


// console.log(input)