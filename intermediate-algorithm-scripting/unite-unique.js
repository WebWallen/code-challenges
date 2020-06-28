function uniteUnique(arr) {
    let combined = [...arguments];
    let uniques = [];

    for (let i = 0; i < combined.length; i++) {
        for (let j = 0; j < combined[i].length; j++) {
            if (!uniques.includes(combined[i][j])) uniques.push(combined[i][j]);
        }
    }

    return uniques;
}