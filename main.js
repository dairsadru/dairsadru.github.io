'use srtict'


let btn = document.getElementById("demo");


console.log(btn.classList);

let dropMenu = document.getElementById("drop");

btn.addEventListener("click", dBlock);

function dBlock() {
    dropMenu.classList.add("drop-d-block");
}
let images = [
    "https: //avtomobilgaz.ru/wp-content/uploads/2017/05/IMG_2336-1024x768-1024x768.jpg",
    "https://next-gazel.ru/sites/default/files/gazel-nekst-samosval-prezentaciya.jpg",
    "https://lh3.googleusercontent.com/proxy/5PcKBiDo93vPDoDEbSLNqnaxoTNugdE__IyvU7ZU9rNMtJAwb-a2nEzjhZNus4hZtT_XmAFY3Xj_wFqyZWN88WJ7NFZx5-FCTgGi7J3Vxd2EmNzXpGu5GcSLF-oMboB_17ltBQb6SkIn-Q_YBqU9wSHjhA48Mk5WkaBqnnGMoEfFLZ8lcGACGe8",
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
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num]
}