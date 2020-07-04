function largestOfFour(arr) {
    let largest = [];

    for (let subarr of arr) {
        largest.push(Math.max(...subarr));
    }

    return largest;
}

largestOfFour([[1, 2], [3, 4], [5, 6], [7, 8]]);
// Prints [2, 4, 6, 8]