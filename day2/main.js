const fs = require('fs');




function getData() {
  return fs.readFileSync('data.txt','utf8', (err, data) => {
      if (err) throw err;
  })
}

function doPartOne(){
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


//PART TWO
function doPartTwo(noun, verb){
  let data = getData();
  data = data.split(',');
  data = data.map(data => parseInt(data));
  data[1] = noun;
  data[2] = verb;
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
  return data[0];
}

function doPartTwoCalculations() {
  let numberToFind = 19690720;
  let nounIndex;
  let verbIndex;

  for(let i = 0; i < 99; i++) {
    let currentNum = doPartTwo(i,0);
    if(currentNum > numberToFind) {
      nounIndex = i-1;
      break;
    }
  }

  for(let i = 0; i < 99; i++) {
    let currentNum = doPartTwo(nounIndex,i);
    if(currentNum > numberToFind) {
      verbIndex = i-1;
      break;
    }
  }

  console.log(100*nounIndex+verbIndex);
}


doPartOne();
doPartTwoCalculations();
