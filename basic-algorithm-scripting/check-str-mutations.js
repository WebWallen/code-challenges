function mutation(arr) {
    let word1 = arr[0].toLowerCase().split('');
    let word2 = arr[1].toLowerCase().split('');
  
    for (let i = 0; i < word2.length; i++) {
      if (word1.indexOf(word2[i]) === -1) return false;
    }
  
    return true;
  }
  
  mutation(["hello", "hey"]);
  // Returns false  