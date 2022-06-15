var click = function () {

var click = document.getElementById("div");

click.style.display = "inline-block";
}

document.getElementById("img").onclick = click;

var click = function () {

var click = document.getElementById("div");

click.style.display = "none";
}

document.getElementById("img1").onclick = click;

var click1 = function () {

var click1 = document.getElementById("input").value;

if (click1 === "germany") {

window.open("http://127.0.0.1:5500/germany.html");
} else if (click1 === "palestine") {
    
window.open("http://127.0.0.1:5500/palestine.html");
    } else if (click1 === "brazil") {

window.open("http://127.0.0.1:5500/barzil.html");
    } else if (click1 === "lceland") {

window.open("http://127.0.0.1:5500/lceland.html");
    } else if (click1 === "afghanistan") {

window.open("http://127.0.0.1:5500/afghanistan.html");
    } else if (click1 === "Aland lslands") {

window.open("http://127.0.0.1:5500/Aland%20lslands.html");
    } else if (click1 === "Albania") {

window.open("http://127.0.0.1:5500/Albania.html");
    } else if (click1 === "Algeria") {

window.open("http://127.0.0.1:5500/Algeria.html");
    } else
    document.write("There are no search results");
}

document.getElementById("submit").onclick = click1;