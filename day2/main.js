const fs = require('fs');




function getData() {
  return fs.readFileSync('data.txt','utf8', (err, data) => {
      if (err) throw err;
  })
}

function doCalculations(){
  let data = getData();
  data = data.split(',');
  data = data.map(data => parseInt(data));
  data[1] = 12;
  data[2] = 2;
  for(let i = 0; i < data.length; i++) {
    if(data[i] == 1) {
      data[data[i+3]] = data[data[i+1]] + data[data[i+2]];
      i+=3;
    }
    if(data[i] == 2) {
      data[data[i+3]] = data[data[i+1]] * data[data[i+2]];
      i+=3;
    }
    if(data[i] == 99) {
      break;
    }
  }
  console.log(data[0]);
}
doCalculations();
