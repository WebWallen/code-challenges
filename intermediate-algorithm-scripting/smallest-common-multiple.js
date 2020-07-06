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