// Pass each array's numbers into the function; if they're all true, return the number and if they're false, return undefined

function findElement(arr, func) {
    for (let num of arr) {
      if (func(num) === true) return num;
    }
    return undefined;
  }
  
findElement([1, 2, 3, 4], num => num % 2 === 0);
// Returns 2