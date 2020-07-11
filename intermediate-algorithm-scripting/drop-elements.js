// Remove array elements until function is true, keep the rest
function dropElements(arr, func) {

    while (arr.length > 0 && !func(arr[0])) {
        arr.shift(); // removes zeroth element, scoots others
    }

    return arr;
}