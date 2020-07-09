function steamrollArray(arr) {
    let flattened = [];

    // Helper function
    let flatten = function(arg) {
        // If it's not an array, push to flattened array
        if (!Array.isArray(arg)) flattened.push(arg);

        // Otherwise, recursively call the function until all nesting is undone
        else {
            for (let el in arg) flatten(arg[el]);
        }
    }

    // For each element of array, call flatten
    arr.forEach(flatten);

    return flattened;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);
//   Returns [1, 2, 3, 4]