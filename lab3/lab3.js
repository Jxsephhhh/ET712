/**
 * Joseph Bernabe
 * Feb 4, Loops
 */
console.log("Joseph Bernabe");
console.log("\n----------- Example 1: for loops -----------");
// use a for loop to print from 0 to 4
 for(let n = 0; n<=4 ; n++){
    console.log(`counting = ${n}`)
 }

 console.log("\n----------- Example 2: for loop with conditional statement -----------");
 // collect the initial value from the user
 // print all even numbers between the initial value and 20
 let = initialvalue = parseInt(prompt("Enter a number: "));
 for(initialvalue; initialvalue<=20 ; initialvalue++){
    if(initialvalue % 2 == 0){
        console.log(initialvalue); // only print even numbers
    }
 }

console.log("\n----------- Example 3: for loop as a decrement counter -----------");
// for loop to print from 9 to 0 in a step of 3 --> 9 6 3 0
for(let n = 9; n>=0 ; n-=3){
    console.log(n)
}

console.log("\n----------- Example 4: for loop in an array(list) -----------");
// set up a list of animals
let animals = ["fish", "turtle", "dog"];
for(let index=0; index<animals.length; index++){
    console.log(animals[index]);
}
// set up a list of numbers
// count how many negative numbers are in the list
let numbers =[5, -3, 10, -9, 2]
let counternegative = 0;
let sumnegative = 0;
for(let index=0; index<numbers.length; index++){
    if(numbers[index]<0){
        counternegative++;
    }
}
console.log(`There is/are ${counternegative} negative number/s in the list 'numbers'`);
console.log("\n----------- Example 5: for loop in a string -----------");
let username = "Peter Pan, neverland"
let counter_e = 0;
for(let index=0; index<username.length; index++){
    // console.log(username[index])
    // find the total number of letter 'e' in username
    if(username[index] == 'e'){
        counter_e++;
    }
}
console.log(`There is/are ${counter_e} letter 'e' in the username`);
console.log("\n----------- EXERCISE FOR LOOP -----------");
let num =[-3, 10, 0, 8, -9, 5, -2, 8, 6, -1]
// use for loop to check and all negative numbers and positive numbers
let positiveSum = 0;
let negativeSum = 0;
let positiveCount = 0;
let negativeCount = 0;

// Use a for loop to check and sum all negative numbers and positive numbers
for (let i = 0; i < num.length; i++) {
    if (num[i] < 0) {
        negativeCount++;  // Count negative numbers
        negativeSum += num[i];  // Sum negative numbers
    } else if (num[i] > 0) {
        positiveCount++;  // Count positive numbers
        positiveSum += num[i];  // Sum positive numbers
    }
}

console.log(`There are ${positiveCount} positive numbers, and their sum is ${positiveSum}`);
console.log(`There are ${negativeCount} negative numbers, and their sum is ${negativeSum}`);
