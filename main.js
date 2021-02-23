'use srtict'


let btn = document.getElementById("demo");
let cont = document.getElementById("cont");


cont.addEventListener("click", removeClass);

let dropMenu = document.getElementById("drop");
btn.addEventListener("click", dBlock);

function dBlock() {
    dropMenu.classList.add("drop-d-block");
}

function removeClass() {
    dropMenu.classList.remove("drop-d-block");
}


//слайдер
let images = [
    "https://img.unibo.ru/foto/message_fotos/233/2336117/foto_largest.jpg",
    "https://alliance-catalog.ru/uploads/user/origins/2018/821cd60458be199980c4b870c3c530d3.jpg",
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
    if (num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num]
}

let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");

let valid = document.getElementById("formValidate");

valid.addEventListener("submit", checkout);

function checkout() {
    if (inp1.value != "" && inp2 != "") {
        if (inp1.value === inp2.value) {
            alert("Пароли совпадают")
            return true;
        }
        alert("Проверьте правильность пароли");
        return false;
    }
}