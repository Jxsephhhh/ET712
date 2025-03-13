console.log("Joseph Bernabe")
/**
 * example 1
 */
// collect the element
let btnpressme = document.querySelector(".btnpressme")

// add a click event to change the button text and background color when the button is clicked

btnpressme.addEventListener("click", function(e){
    if(e.target.textContent == "PRESS ME"){
        e.target.textContent = "Button was pressed!"
    }
    else{
        e.target.textContent = "PRESS ME"
    }
    // toggle between class 'btnactive' and 'btnpressme'
    e.target.classList.toggle("btnactive")
})

/**
 * Example 2
 */
// remove the <li> if it's clicked
// collect the elements
let fruitlist = document.querySelector("#fruitlist")

// click event to remove the <li> when it's clicked
fruitlist.addEventListener("click", function(event){
    // check if the clicked element is a 'li'
    if(event.target.tagName.toLowerCase() === 'li'){
        // remove the 'li' that was clicked
        event.target.remove()
    }
    else{
        console.log(event.target)
    }
})

/**
 * Example 3: prevent default
 */
// collect the element
let linkqcc = document.querySelector(".linkqcc")

linkqcc.addEventListener("click", function(event){
    event.preventDefault()
    alert("QCC Website is off")

})

/**
 * Example 4
 */
// collect element
let modalwindow = document.querySelector(".modalwindow")
let linkreadmore = document.querySelector(".linkreadmore")
let closex = document.querySelector(".closex")

linkreadmore.addEventListener("click", function(){
    modalwindow.style.display = "block"
})
closex.addEventListener("click", function(){
    modalwindow.style.display = "none"
})