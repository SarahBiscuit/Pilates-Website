//add regex to verify email address entered in enquiries form is a valid email address.

let emailAddress = document.getElementById("emailAddress");

//regex function to check if is valid email

function validateEmail (email) {
const emailValidationRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
return emailValidationRegex.test(email);
}

//running the function

const email = emailAddress.value;
console.log(validateEmail(email));

//jQuery eventListener to check if email is valid, and if it is not to bring up alert message and make sure the form does not submit.

//can't figure out why my HTML file and my jquery file are not linking up

$("#submitButton").click(function(){
    if (validateEmail(email) === false) {
        alert("Invalid email - please amend email address");
})

//This code currenlty logs true or false in the console, but need it to prevent the user from submitting the form if it is not a valid email address.  
//Could also get it to bring up an error message (e.g. an alert) for the user if they enter an invalid email address.
//Want to use jQuery event listener on submit button