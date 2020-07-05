function extractEachKth(arr, k) {
    // Subtract 1 due to 0 index
    k--;

    for (let i = k; i < arr.length; i += k) {
        arr.slice(i, 1);
    }

    return arr;
}

