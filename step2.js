// SUM ZERO
addToZero = (numArr) => {
  if (numArr.length === 0 || numArr.length === 1) {
    return false
  }
  for (let i = 0; i < numArr.length; i++) {
    for (let j = 1; j < numArr.length; j++) {
      if (numArr[i] + numArr[j] === 0) {
        return true
      }
      
    }
  }
  return false
}

console.log('sum zero results')
console.log(addToZero([]))
console.log(addToZero([1]))
console.log(addToZero([1, 2, 3]))
console.log(addToZero([1, 2, 3, -2]))
console.log('==========================================')
// I believe that the runtime of this code is Quadratic Time (O(n^2)), this would also have a Quadratic space complexity.

// UNIQUE CHARACTERS
hasUniqueChars = (word) => {
  word.toString()
  let wordArr = word.split('')
  let uniqueChars = [...new Set(wordArr)]
  if (wordArr.length !== uniqueChars.length) {
    return false
  } else {
    return true
  }
}

console.log('has unique characters results')
console.log(hasUniqueChars("Monday"))
console.log(hasUniqueChars("Moonday"))
console.log('==========================================')
// I believe that this fuction has a Quadratic runtime as well due to the "[new Set(wordArr)]" process that makes it have to create a new array and insert new data inside it but, I think this would have a linear space complexity.

// PANGRAM SENTENCE
isPangram = (str) => {
  str = str.toString().toLowerCase()
  let strArray = str.split(' ').join('')
  let cleanStr = strArray.replace(/[^a-z0-9]/gi, '')
  let cleanArr = cleanStr.split('')
  let letters = [...new Set(cleanArr)]
  if (letters.length === 26) {
    return true
  } else {
    return false
  }
}

console.log('pangram sentence results')
console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("I like cats, but not mice"))
console.log('==========================================')
// I believe this function has a Quadratic runtime due to all the arrays it has to build but, I believe this function has a linear space complexity.

// LONGEST WORD
findLongestWord = (arr) => {
  let longest = 0
  for (let i = 0; i < arr.length; i++) {
    let newArr = arr[i].split('')
    if (newArr.length > longest) {
      longest = newArr.length
    }
  }
  return longest
}

console.log('longest word results')
console.log(findLongestWord(["hi", "hello"]))
// I believe that this function has a Linear runtime and a linear space complexity.