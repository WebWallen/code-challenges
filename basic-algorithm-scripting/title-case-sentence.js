// Goal is to uppercase the first letter then keep the other characters lowercase (stuff like this = always easier after splitting to array)

function titleCase(str) {
    let newStr = [];
    str = str.split(' ');
  
    for (let i = 0; i < str.length; i++) {
      newStr.push(str[i].slice(0, 1).toUpperCase() + str[i].slice(1).toLowerCase());
    }
  
    return newStr.join(' ');
  }
  
  titleCase("I'm a little tea pot");
  // Returns "I'm A Little Tea Pot"