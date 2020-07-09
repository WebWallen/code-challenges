function extractEachKth(arr, k) {
    // Subtract 1 due to 0 index
    k--;

    for (let i = k; i < arr.length; i += k) {
        // Increment by k to remove each kth element
        arr.slice(i, 1);
    }

    return arr;
}

extractEachKth([1, 2, 3, 4, 5, 6], 2)
// Returns [1, 3, 5]