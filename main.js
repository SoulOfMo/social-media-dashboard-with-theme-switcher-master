var tgg = document.querySelector(".toggle");
var toggleButton = document.querySelector(".toggle-button");
var body = document.querySelector("body")
tgg.addEventListener('click', function () {
    toggleButton.classList.toggle("toggle-active")
    body.classList.toggle("dark-theme")
})