const menu = document.querySelector('.menu');
const dropDown = document.querySelector('ul');
const navFunc = document.querySelector('#nav');
const closure = document.querySelector('#closure');
const ul = document.querySelector("ul");
const nutsy = document.querySelector(".nutsy");
const power = document.querySelector(".fa-shopping-cart");
const shift = document.querySelector("#shift");

menu.addEventListener('click', () => {
    dropDown.classList.toggle('toggleDisplay')
    menu.style.display = "none"
    navFunc.style.height = "fit-content"
    closure.style.display = "block"
    ul.style.display = "block"
    power.id = "shift"
});

closure.addEventListener('click', () => {
    closure.style.display = "none"
    ul.style.display = "none"
    menu.style.display = "block"
    navFunc.style.height = "4rem"
    menu.style.margin_right = "-9rem"
    power.removeAttribute("id")
})

function countdown() {
    var now = new Date();
    var eventDate = new Date(2020, 11, 25);

    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 1000);
    var h = Math.floor(m / 1000);
    var d = Math.floor(h / 1000);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("days").textContent = d;
    document.getElementById("days").innerText = d;

    document.getElementById("hours").innerText = h;
    document.getElementById("minutes").innerText = m;
    document.getElementById("seconds").innerText = s;

    setTimeout(countdown, 1000);
}

countdown();