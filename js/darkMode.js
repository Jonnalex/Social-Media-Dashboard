let swtch = document.querySelector("#switch");
let labelSwtch = document.querySelector(".label")

swtch.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    swtch.classList.toggle("active");
    labelSwtch.classList.toggle("active");
})