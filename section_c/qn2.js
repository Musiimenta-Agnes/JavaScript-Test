// Implement a function to find the sum of all even numbers in an array. 


function sumOfEvenNumbers(array){
    
    for (let i = 2; i %2 == 0; i ++){
        return i + i++;
    }
   
}
let array = sumOfEvenNumbers([1,2,4,5,6,7,8]);
console.log(array);