function fearNotLetter(str) {
    // Store alphabet inside an array for easy access
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    str = str.split('');

    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < str.length; j++) {
            // Compare string character to each letter
            if (letters[i] === str[j]) {
                // Find where string mismatches alphabet
                if (letters[i + 1] !== str[j + 1]) {
                    return letters[i + 1];
                }
            }
        }
    }
}

fearNotLetter("abce");
// Prints "d"