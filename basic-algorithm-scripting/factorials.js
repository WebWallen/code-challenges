// Find the factorial of the provided number (i.e. multiply every number from 1 to input)
function factorialize(num) {
    let factors = [];
  
    if (num === 0) return 1;
  
    for (let i = num; i > 0; i--) {
      factors.push(i);
    }
  
    let total = 1;
  
    for (let num of factors) {
      total *= num;
    }
  
    return total;
  }
  
  factorialize(5);