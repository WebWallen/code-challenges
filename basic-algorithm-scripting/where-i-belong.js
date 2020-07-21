// First, sort the array; second, use a loop to find where the number should go

function getIndexToIns(arr, num) {
    let sorted = arr.sort((a, b) => a - b);

    for (let i = 0; i < sorted.length; i++) {
        // Belongs at index before the first bigger number
        if (sorted[i] >= num) return i;
    }

    // In case it goes at the end
    return sorted.length;
  }
  
  getIndexToIns([40, 60], 50);
  // Returns 1