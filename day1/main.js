const fs = require('fs');

fs.readFile('data.txt','utf8', (err, data) => {
    if (err) throw err;
    let dataArr = data.split('\r\n');
    dataArr.map(data => parseInt(data));
    let final = dataArr.reduce((prev, curr, index) => (index == 1) ? (Math.floor(prev/3) - 2) + (Math.floor(curr/3) - 2) : (prev + (Math.floor(curr/3) - 2)));
    console.log(final);
})
