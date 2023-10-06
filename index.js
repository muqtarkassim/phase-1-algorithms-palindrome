function isPalindrome(word) {
  // Write your algorithm here
const letters=[...word]
const joined=letters.join('')
//console.log(reversed)
const reversed=letters.reverse().join('')
console.log(reversed)

if(joined === reversed){
  console.log('true')
  return true
}else{
  console.log('false')
  return false
}
}
isPalindrome('racecar')

/* 
  Add your pseudocode here
  get the prams in the function
  add to aray and then join it to to string
  for reverse use .reverse 
  check condiotion
  
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
