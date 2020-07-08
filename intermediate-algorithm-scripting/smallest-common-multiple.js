function smallestCommons(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let common = max;
  
    for (let i = max - 1; i >= min; i--) {
      if (common % i) {
        common += max;
        i = max;
      }
    }
    
    return common;
  }

smallestCommons([3, 4])
// Prints 12 (smallest number that can be evenly divided by both three and four)