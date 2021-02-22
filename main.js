'use srtict'


let btn = document.getElementById("demo");


console.log(btn.classList);

let dropMenu = document.getElementById("drop");

btn.addEventListener("click", dBlock);

function dBlock() {
    dropMenu.classList.add("drop-d-block");
}