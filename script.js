let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let randomizer = document.getElementById("randomizer");

function setGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function setRandomGradient(){
    c1 = Math.floor(11390625*Math.random());
    c2 = Math.floor(11390625*Math.random());

    color1.value = "#" + c1.toString(16);
    color2.value = "#" + c2.toString(16);

    setGradient();
}

setGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomizer.addEventListener("click", setRandomGradient);