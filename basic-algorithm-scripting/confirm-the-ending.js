// Check the string's ending to verify if it matches the provided target
function confirmEnding(str, target) {
    let sliceBegin = str.length - target.length;
    let strEnd = str.slice(sliceBegin);
    
    return strEnd === target ? true : false;
  }
  
  confirmEnding("Bastian", "n");
// Returns true  