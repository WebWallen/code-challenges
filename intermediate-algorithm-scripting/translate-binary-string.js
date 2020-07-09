// What is happening below...
// 1. Split the binary string, initialize arr for translation
// 2. Obtain string value from char code of each binary num
// 3. After pushing it all up, return as joined string

function binaryAgent(str) {
    let english = [];
    str = str.split(' '); // Now they can be traslated as words

    for (let i = 0; i < str.length; i++) {
        english.push(String.fromCharCode(parseInt(str[i], 2)));
    }

    return english.join(''); // Now it can be returned as a sentence

  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
//   Returns "Aren't bonfires fun?!"