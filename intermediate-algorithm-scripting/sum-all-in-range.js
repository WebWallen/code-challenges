function sumAll(arr) {
    let sum = 0;
    let range = [];
  
    if (arr[0] < arr[1]) {
      for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
        range.push(i)
      }
    } else {
      for (let i = arr[0]; i >= arr[arr.length - 1]; i--) {
        range.push(i)
      }
    }
  
    return range.reduce((sum, num) => sum += num, 0)
  }
  
  sumAll([1, 4]);
  // Returns 10