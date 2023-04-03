/*
Write a method, that will get an integer array as 
parameter and will process every number from this array.

Return a new array with processing every 
number of the input-array like this:

If the number has an integer square root, 
take this, otherwise square the number.
*/


// Solution

function squareOrSquareRoot(array) {
  return array.map(x => {
    const r = Math.sqrt(x);
    return (r % 1 == 0) ? r : (x*x);
  })
}

// or 

function squareOrSquareRoot(array) {
  let processed = [];

  for (var i = 0; i<array.length; i++) {
    let number = array[i];

    if (Math.sqrt(number) == Math.floor(Math.sqrt(number))) {
      processed.push(Math.sqrt(number));
    }
    else {
      processed.push(number*number);
    }
  }
  return processed;
}