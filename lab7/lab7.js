console.log("Joseph Bernabe");
console.log("\n----- Example 1 -----");
// select element by class name "description"
let desc = document.querySelector(".description");
console.log(desc);
// select element by id name, "title"
let titlenode = document.querySelector("#title");
console.log(titlenode);
// select element by tag name, "p"
let par = document.querySelectorAll("p");
console.log(par);
// select all elements with class name "methods"
let methods = document.querySelectorAll(".methods");
console.log(methods);
// loop through each element in a node list
console.log("----- Example 2: Loop through each element in a node list -----");
for (let n = 0; n<methods.length; n++){
    console.log(methods[n]);
}

console.log("\n----- Example 3: CLICK EVENT -----");
// select button
let btn = document.querySelector(".btnclick");
// add an event (click) to btn
btn.addEventListener("click", function(){
    alert("BTN WAS CLICKED")
})

console.log("\n----- Example 4: Click event to change text content -----");
// select the elements, 'btnmsg' and 'msg'
let btnmsg = document.querySelector(".btnmsg");
let msg = document.querySelector(".msg");
// add an event to 'msg' that changes the text node to "Joseph Bernabe"
btnmsg.addEventListener("click", function(){
    msg.textContent = "Joseph Bernabe";
})

console.log("\n----- Example 5: Changing shapes mini-app -----");
//select elements
let shape = document.querySelector(".shape");
let btncircle = document.querySelector(".btncircle");
let btnsquare = document.querySelector(".btnsquare");
let btnrectangle = document.querySelector(".btnrectangle");

// add event to each button
btncircle.addEventListener("click", function(){
    shape.className = "circle"
})
btnsquare.addEventListener("click", function(){
    shape.className = "square"
})
btnrectangle.addEventListener("click", function(){
    shape.className = "rectangle"
})

