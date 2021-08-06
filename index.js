// ////////////////////////////////////////////////////////
// Binary Search - Must always be sorted to know if x is to the left or right /////////////////////////////////////////////
// ///////////////////////////////////////////////////////
// classic way
const search = (val, arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(i + ' Its trying to fine the element');
    if (val === arr[i]) {
      return i;
    }
  }
  return -1;
};

const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(search(6, values));
// //////////////////////////////////////////
// Binary Search approach /////////////////////////////////////
// //////////////////////////////////////////

const binary = (val, arr) => {
  let lower = 0;
  let upper = arr.length - 1;

  while (lower <= upper) {
    // To demonstrate how many times it loops to compare to classic
    console.log('Its trying to find the element');
    // The middle is equal to the lower(which is 0) plus (the rounded down of upper - lower (incase like a 9, 9/2 =4.5) then divide by 2 to find the middle)
    const middle = lower + Math.floor((upper - lower) / 2);
    // Once middle index is found, check if the value is equal to the value being looked for. If so that means the looked for value is equal to the middle index.
    if (val === arr[middle]) {
      return middle;
    }
    // If not found in the middle, It will either be to the left or the right of the middle.

    // Left side
    if (val < arr[middle]) {
      // To shift to the left side
      // upper becomes the middle -1 index position (from 5(middle) to 4 .. checks 0-4)
      upper = middle - 1;
    }
    // Right side
    // To shift to the right side
    // lower becomes the middle +1 index position (from 5(middle) to 6 .. checks 6-10)
    else {
      lower = middle + 1;
    }
  }
  return -1;
};

const values2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binary(6, values2));
