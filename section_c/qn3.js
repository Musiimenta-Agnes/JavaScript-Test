// Create a function that takes two numbers. If the numbers are the same, return 
//their product. If they are different, return their sum.



function numbers(a,b){
    if (a === b){
        return a + b;
    }else{
        return a * b;
    }
}

let answer1 = numbers(3,3);
console.log(answer1);

let answer2 = numbers(5,3);
console.log(answer2);

