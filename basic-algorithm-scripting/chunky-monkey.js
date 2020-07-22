function chunkArrayInGroups(arr, size) {
    let newArr = [];
  
    for (let i = 0; i < arr.length; i += size) {
    //   Loop is not here to go through every index, just to specify the size of subarray
      newArr.push(arr.slice(i, i + size));
    }
  
    return newArr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
//   Returns [[a, b], [c, d]]