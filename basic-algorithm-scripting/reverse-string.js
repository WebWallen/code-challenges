// Reverse the provided string (most eloquent solution is to split, reverse, and join -- otherwise, long for loops and needless complexity required)

function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  reverseString("hello");
//   Returns "olleh"