function sumFibs(num) {
    // Sequence always begins with two ones
    let fibSeq = [1, 1];
    let nextFib = 0;
  
    // Loop until the input number is equal or greater than a pair of fib's (0, 1)
    while ((nextFib = fibSeq[0] + fibSeq[1]) <= num) {
      fibSeq.unshift(nextFib);
    }
  
    // Filter out the odd parts of the sequence
    let oddFib = fibSeq.filter(num => num % 2 !== 0);

    // Reduce said sequence down to a sum of nums
    let oddSum = oddFib.reduce((sum, num) => sum += num);
  
    return oddSum;
  
  }
  
  sumFibs(4);
  