//add regex to verify email address entered in enquiries form is a valid email address.

let emailAddress = document.getElementById("emailAddress");

function validateEmail (email) {
const emailValidationRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
return emailValidationRegex.test(email);
}

const email = emailAddress.value;
console.log(validateEmail(email));