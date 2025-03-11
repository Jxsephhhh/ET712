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

/**
 * Tuesday, March 11, events
 */
// example 6
//onmouseout event
// collect the element
let event6 = document.querySelector(".event6");
// add a mouseout event
event6.onmouseout = function(){
    alert("MOUSE OUT - Example 6")
}

// example 7
// inline event 
function openalert(){
    alert("CLICK EVENT - Example 7")
}

// example 8 mouseover event
// change the background color of a div when the mouse hover over the element
// collect the element
let divexample8 = document.querySelector(".divexample8")
divexample8.onmouseout = function(){
    let randred = Math.floor(Math.random()*255)
    let randgreen = Math.floor(Math.random()*255)
    let randblue = Math.floor(Math.random()*255)
    divexample8.style.backgroundColor = `rgb(${randred},${randgreen},${randblue})`
}

// example 9: keyboard event
// collect the elements
let inputex9 = document.querySelector(".inputex9")
let ex9paragraph = document.querySelector(".ex9paragraph")

inputex9.onkeydown = function(event){
    ex9paragraph.innerHTML = `key ${event.key} was pressed`
}