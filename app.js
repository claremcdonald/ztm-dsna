// Section 3: Big O
const nemo = ['nemo'];
const largeArray = new Array(100).fill('nemo');

function findNemo(array) {
  // let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
  // let t1 = performance.now();
  // console.log('Call to find Nemo took ' + (t1 - t0) + ' milliseconds.');
}

findNemo(nemo);
// O(n)
// linear time

function compressFirstBox(boxes) {
  console.log(boxes[0]);
}

// O(1)
// constant time

function logFirstTwoBoxes(boxes) {
  conosole.log(boxes[0]);
  console.log(boxes[1]);
}

//O(2)
//runs two operations every time
//it's still constant time. we round it down to simply saying O(1)

// LOG ALL PAIRS OF AN ARRAY

// function getPairs(boxes) {
//   let pairsArray = [];
//   for (box of boxes) {
//     getPairs.push();
//   }
// }

const boxes = ['a', 'b', 'c', 'd', 'e'];

function getPairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

getPairs(boxes);

// O(n * n)
// O(n^2)
// Quadratic time
