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

// Section 4: How to Solve Coding Problems

// Return true is a pair of two numbers from the array is equal to the sum 8.
// Quadratic time, inefficient solution:

const numbersOne = [1, 2, 3, 9];
const numbersTwo = [1, 2, 4, 4];

function findPairWithSum(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 8) return true;
    }
  }
  return false;
}

console.log(findPairWithSum(numbersOne));
console.log(findPairWithSum(numbersTwo));

// Given 2 arrays, create a funciton that let's a user know (true/false) whether these two arrays contain any common items.
// For example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return flase.
// --------
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];
// should return true.

// Brute force approach:
// Time complexity: O(a * b)
// Space complexity: O(1)
function compareTwoArrays(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(compareTwoArrays(array1, array2));

// Better solution to impove time complexity:
// Time complexity: O(a + b)
// Space complexity: O(a)

// array1 ==> obj {
// a: true,
// b: true,
// c: true,
// x: true
// }

// array2[index] ===  obj.properties

function containsCommonItem(array1, array2) {
  // loop through first array and create object where properties === items in the array
  let map = {};
  for (let i = 0; i < array1.length; i++) {
    if (!map[array1[i]]) {
      const item = array1[i];
      map[item] = true;
    }
  }

  // loop through second array and check if item in second array exists on created object.
  for (let j = 0; j < array2.length; j++) {
    if (map[array2[j]]) {
      return true;
    }
  }
  return false;
}

console.log(containsCommonItem(array1, array2));

// More readable solution:
function containsCommonItem2(array1, array2) {
  return array1.some((item) => array2.includes(item));
}

console.log(containsCommonItem2(array1, array2));
