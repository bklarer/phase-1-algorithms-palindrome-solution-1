function isPalindrome(word) {
  // Write your algorithm here
  let originalArray = word.split('')
  let reverseArray = originalArray.reverse()
  let reverseWord = reverseArray.join("")
  
  console.log(word)
  console.log(reverseWord)

  if (word === reverseWord) {
    return true
  } else {return false}
}

/* 
  Add your pseudocode here
  Need to turn word into an array and reverse it.
*/

/*
  Add written explanation of your solution here
  split original word into an array, reversed the array, rejoined into a word, compared to see if the two words were the same
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log(isPalindrome("mom"))
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
