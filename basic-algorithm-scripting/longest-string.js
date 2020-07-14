function findLongestWordLength(str) {
    str = str.split(' ');
    let longest = str[0];
  
    for (let i = 0; i < str.length; i++) {
      if (str[i].length > longest.length) longest = str[i]
    }
  
    return longest.length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
//   Returns 6 (char count of jumped)