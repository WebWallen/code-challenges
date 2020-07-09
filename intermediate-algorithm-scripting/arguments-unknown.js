// We don't know the argument type, which requires some tricky tactics
// First, convert whatever the arguments might be into an array
// Second, check for non-numbers (automatic undefined)
// Third, handle the case of two numbers (sum them)
// Fourth, handle the case of one number by itself
// Fifth, add to the first 0 if it's type number
// Sixth, return undefined if it's not a num

function addTogether() {
    let inputs = Array.from(arguments); // Can always use "arguments" to play with input and their types

    return inputs.some(el => typeof(el) !== 'number')
        ? undefined
        : inputs.length > 1
        ? inputs.reduce((sum, num) => sum += num, 0)
        : num => typeof(num) === 'number'
        ? num + inputs[0]
        : undefined
  }
  
  addTogether(2,3);
//   Returns 5