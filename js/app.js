const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error");
const errorIcon = document.getElementById("error-icon");
const regex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
let borderError = `2px solid #F96464`;
let border = `1px solid #CE9898`;

function emailValidation() {
    if (!emailInput.value.match(regex)) {
        errorMessage.style.display = "block";
        emailInput.style.border = borderError;
        errorIcon.style.display = "block";
    } else {
        errorMessage.style.display = "none";
        emailInput.style.backgroundColor = "#fff";
        emailInput.style.border = border;
        errorIcon.style.display = "none";
    }
}
document.querySelector("button").addEventListener("click", function (event) {
    event.preventDefault();
    emailValidation();
});