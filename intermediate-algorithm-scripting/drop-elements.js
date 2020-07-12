// Remove array elements until function is true, keep the rest
function dropElements(arr, func) {

    while (arr.length > 0 && !func(arr[0])) {
        arr.shift(); // removes zeroth element, scoots others to left 
    }

    return arr;
}

dropElements([1, 2, 3, 4, 5, 6], i > 3);
// Returns [4, 5, 6]