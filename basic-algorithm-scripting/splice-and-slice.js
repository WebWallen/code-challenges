// Copy the second array (no mutating!) then "splice" in the first array's elements beginning at index n

function frankenSplice(arr1, arr2, n) {
    let frankenArr = arr2.slice(); // clone of second array
  
    for (let i = 0; i < arr1.length; i++) {
      frankenArr.splice(n, 0, arr1[i]); // start inserting at index n
      n++;
    }
  
    return frankenArr;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
  // Returns [4, 1, 2, 3, 5]