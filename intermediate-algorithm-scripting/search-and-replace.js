function myReplace(str, before, after) {
    // Easier with arrays, so convert first
    let newStr = [];
    let beforeArr = before.split('');
    let afterArr = after.split('');

    for (let word of str.split(' ')) {
        if (word === before) {
            // Must keep uppercase if set that way, so check it
            if (beforeArr[0] === beforeArr[0].toUpperCase()) {
                // Convert first letter (arr element) to upper, add to rest as lowers
                newStr.push(afterArr[0].toUpperCase() + afterArr.slice(1).join(''));
                newStr = newStr.flat();
            } else {
                // Lowercase is easy
                newStr.push(after);
            }
        //   Not a word to be replaced
        } else newStr.push(word);
    }

    return newStr;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");