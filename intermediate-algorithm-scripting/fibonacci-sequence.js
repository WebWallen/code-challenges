// Fibonacci means add previous num to current num to calculate next num
// The Fibonacci Sequence always begins with two ones, thus prefilled array
// While makes sense as we want every number up to a predefined limit or max
// Filter/reduce could've been combined together sans variable in a return
// But this would make for confusing code, hence logically named variables

function sumFibs(num) {
    let fibSeq = [1, 1];
    let nextFib = 0;
  
    while ((nextFib = fibSeq[0] + fibSeq[1]) <= num) {
      fibSeq.unshift(nextFib);
    }
  
    let oddFib = fibSeq.filter(num => num % 2 !== 0);
    let oddSum = oddFib.reduce((sum, num) => sum += num);
  
    return oddSum;
  
  }
  
  sumFibs(4);
  