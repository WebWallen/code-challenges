function uniteUnique(arr) {
    // Arr isn't guaranteed to be structured correctly so use arguments object
    let combined = [...arguments];
    let uniques = [];

    // Subarrays always requires nested for loops: [i] is the actual character being compared
    for (let i = 0; i < combined.length; i++) {
        for (let j = 0; j < combined[i].length; j++) {
            // First element is automatically "unique" (empty arr), beyond that conditional filters out any repeats
            if (!uniques.includes(combined[i][j])) uniques.push(combined[i][j]);
        }
    }

    return uniques;
}