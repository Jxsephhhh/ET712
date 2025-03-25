console.log("Joseph Bernabe")
// collect elements
const myform = document.querySelector("#myform")
const greeting = document.querySelector(".greeting")
const greetuser = document.querySelector(".greetuser")
const btnsubmit = document.querySelector(".btnsubmit")
const errormsg = document.querySelector(".errormsg")

window.addEventListener("load",function(){
        // disabled the submit button when the webpage is loaded
        btnsubmit.disabled = true
})

myform.addEventListener("submit", function(event){
    event.preventDefault()


    // collect the username
    let username = document.querySelector("#username")
    let usernamevalue = username.value

    // collect the password
    let password = document.querySelector("#pasword")
    let passwordvalue = password.value

    // remove whitespace before and after the username and password
    usernamevalue = usernamevalue.trim()
    passwordvalue = passwordvalue.trim()

    // testing
    // console.log(usernamevalue)
    // validation of username
    if(usernamevalue===""){
        alert("Please enter a username")
        return; // stop further execution
    }

    // validate the password to have 8+ characters
    if (passwordvalue < 8){
        errormsg.style.display = "block"
    }else{
        errormsg.style.display = "none"
    }

    // print the username in the greeting message
    greetuser.innerHTML = usernamevalue
    greeting.style.display = "block"


    // clear the input value
    username.value =""
})

myform.addEventListener("input", function(){
    
})