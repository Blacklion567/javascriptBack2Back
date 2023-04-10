/* Stacks */
// functions: push, pop, peek, length

let letters = [] // this is our stock

let word = "racecar"

let rword = " ";

// put letters of word into stock 
for (let i = 0; i < word.length; i++){
    letters.push(word[i])
}
for (let i = 0; i < word.length; i++){
    rword += letters.pop()
}

// pop off the stock in reverse order
if (rword === word) {
    console.log(word + " is a palindrome.");
}
else {
    console.log(word + " is not a palindrome");
}

console.log(word)
console.log(rword)