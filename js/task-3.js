const input = document.querySelector('#name-input')
const span = document.querySelector('#name-output')

input.addEventListener("input", handler);

function handler (event) {
    const userName = event.currentTarget.value.trim();
    if (userName === "") {
        span.textContent = "Anonymous";
    } else {
        span.textContent = userName;
    }
}
