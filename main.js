//add regex to verify email address entered in enquiries form is a valid email address.

let emailAddress = document.getElementById("emailAddress");

//regex function to check if is valid email

$(document).ready(function() {
function validateEmail(email) {
const emailValidationRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
return emailValidationRegex.test(email);
}

//jQuery eventListener to check if email is valid, and if it is not to bring up alert message and make sure the form does not submit.

//can't figure out why my HTML file and my jquery file are not linking up

$("#enquiriesForm").submit(function(event){
    const email = $("#emailAddress").val();
    if (!validateEmail(email)) {
        alert("Invalid email - please amend email address");
        event.preventDefault();
}
});
});

