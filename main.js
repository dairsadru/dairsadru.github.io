'use srtict'


let btn = document.getElementById("demo");
let cont = document.getElementById("cont");


cont.addEventListener("click", removeClass);

let dropMenu = document.getElementById("drop");
btn.addEventListener("click", dBlock);

function dBlock() {
    dropMenu.classList.toggle("drop-d-block");
}

function removeClass() {
    dropMenu.classList.remove("drop-d-block");
}


//слайдер
let images = [
    "https://img.unibo.ru/foto/message_fotos/233/2336117/foto_largest.jpg",
    "https://alliance-catalog.ru/uploads/user/origins/2018/821cd60458be199980c4b870c3c530d3.jpg",
    "https://next-gazel.ru/sites/default/files/gazel-nekst-samosval-prezentaciya.jpg",
];

let btnLeft = document.getElementById("btn-left")
let btnRight = document.getElementById("btn-right")


btnLeft.addEventListener("click", changeNext)
btnRight.addEventListener("click", changePrev)
let num = 0;

function changeNext() {
    let slider = document.getElementById("slider");
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num]
}

function changePrev() {
    let slider = document.getElementById("slider");
    num--;
    if (num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num]
}

//likes

const likeElems = document.querySelectorAll("i");

likeElems.forEach((likeEl) => {
    likeEl.addEventListener("click", addLike);
})

/**@param {MouseEvent} event */
function addLike(event) {
    let likeEl = event.target;
    let zeroLikesHeart = likeEl.classList.contains("far");
    if (zeroLikesHeart) {
        likeEl.classList.remove("far");
        likeEl.classList.add("fas");
    } else {
        likeEl.classList.remove("fas");
        likeEl.classList.add("far");
    }

}