// Repeat the string (no spaces between) as many times as specified
function repeatStringNumTimes(str, num) {
    let repeats = [];
    let i = 0;
  
    while (i < num) {
      repeats.push(str);
      i++;
    }
  
    return repeats.join('');
  }
  
  repeatStringNumTimes("abc", 3);
// Returns "abcabcabc"  