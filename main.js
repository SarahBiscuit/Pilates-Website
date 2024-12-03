//add regex to verify email address entered in enquiries form is a valid email address.

//Here is a simple regex pattern for validating email addresses: ^ [a-zA-Z0-9_.±]+@ [a-zA-Z0-9-]+. [a-zA-Z0-9-.]+$ Let’s break down this pattern: Start of the string. One or more characters that can be letters (a-z, A-Z), digits (0-9), underscores (_), dots (.), plus signs (+), or hyphens (-).

function validateEmail (email) {
const emailValidationRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
return emailValidationRegex.test(email);
}