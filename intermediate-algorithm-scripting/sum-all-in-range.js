// Sum every number in the range from arr[0] to arr[1]
function sumAll(arr) {
    let range = [];
  
    // Two loops needed because some input have the biggest number in front (and others have the smallest)
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