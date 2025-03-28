//  Write a function that checks if a given word is a palindrome.


function isPalindrome(word){
    word = word.toLowerCase();
    if (word == word.split('').reverse().join('')){
        return true;
    }else{
        return false;
    }

}
let reversedWord = isPalindrome('madam');
console.log(reversedWord);