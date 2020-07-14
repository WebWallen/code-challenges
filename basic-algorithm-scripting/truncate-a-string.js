function truncateString(str, num) {
    let result = [];
  
    if (str.length > num) {
      let i = 0;
      
      while (i < num) {
        result.push(str[i])
        i++;
      }
    } else {
      return str;
    }
  
    return result.join('') + '...'
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
// Returns "A-tisket..."  