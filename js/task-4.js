
const form = document.querySelector(".login-form")

form.addEventListener("sibmit", handler)
function handler (event) {
    event.preventDefault();

    const getEmail = form.elements.email.value.trim();
    const getPassword = form.elements.password.value.trim();

    if (!getEmail || !getPassword) {
        alert("All form fields must be filled in");
        return;
        
    }
    const result = {
        email: getEmail,
        password: getPassword,
    };
    console.log(result);

    form.reset();
} 