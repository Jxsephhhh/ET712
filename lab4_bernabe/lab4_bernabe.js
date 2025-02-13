console.log("Joseph Bernabe")
console.log("\n------- Example 7: built-in function ------")
// built-in function in JS is called as a global variable
// Math function
let num_pi = Math.PI
console.log(`JS PI value = ${num_pi}`)
// round() method returns the nearest interger
console.log(`rounded up PI = ${Math.round(num_pi)}`)
// ceil() method returns the round up of a number
console.log(`ceil method applied to PI = ${Math.ceil(num_pi)}`)
// pow() method returns the value of base to the power of exponent
console.log(`2^3 = ${Math.pow(2,3)}`)
// square root method --> sqrt()
console.log(`squared root of 9 = ${Math.sqrt(9)}`)
// random number generator. random() method returns a random value between 0 and 1
console.log(`Random number = ${Math.random()}`)
// random number between 1 and 9
let n = 1 + Math.round(Math.random()*8)
console.log(`Number between 1 and 9 = ${n}`)
console.log("\n------- Example 8: random number -------")
// function to randomly generate a number between -5 and 5
function randnumber(){
    let p = -5 + Math.round(Math.random()*10)
    return p;
}

console.log("\n------- Example 9: random number in a list-------")
// function to randomly pick a color from a list of colors
let colors = ["red", "blue", "green", "yellow", "black"]
function randomcolor(picked_index){
    let list_size = colors.length   // find the length of the list
    let last_index = list_size - 1    // find the last index of the list
    let random_index = Math.round(Math.random()*last_index)  // randomly pick a number between 0 and last index
    return colors[random_index]     // return the random picked color
}

console.log(`Color picked = ${randomcolor()}`)