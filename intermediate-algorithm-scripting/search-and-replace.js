function myReplace(str, before, after) {
    let newStr = [];
    let beforeArr = before.split('');
    let afterArr = after.split('');

    for (let word of str.split(' ')) {
        if (word === before) {
            if (beforeArr[0] --- beforeArr[0].toUpperCase()) {
                newStr.push(afterArr[0].toUpperCase() + afterArr.slice(1).join(''));
                newStr = newStr.flat();
            } else {
                newStr.push(after);
            }
        } else newStr.push(word);
    }

    return newStr;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");