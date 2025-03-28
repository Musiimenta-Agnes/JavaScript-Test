// . Write a function to reverse a given string.

function reverseString(str){
    str = str.toLowerCase();
   return  str.split('').reverse().join('');

}

console.log(reverseString('Musiimenta'));