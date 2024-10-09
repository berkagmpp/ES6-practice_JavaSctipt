//mouse events

let ractangle = document.querySelector(".ractangle");

ractangle.addEventListener("mousedown", function (event) {
    console.log("mousedown");
    console.log(event.target.getBoundingClientRect());
});

ractangle.addEventListener("mouseup", function (event) {
    console.log("mouseup");
});

ractangle.addEventListener("mouseenter", function (event) {
    console.log("mouseenter");
});

ractangle.addEventListener("mouseleave", function (event) {
    console.log("mouseleave");
});

// pageX, pageY

let body = document.querySelector("body");

body.addEventListener("click", function (event) {
    console.log(event.pageX, event.pageY);
    let div = document.createElement("div");
    div.classList.add("circle");
    div.style.left = event.pageX - 25 + "px";
    div.style.top = event.pageY - 25 + "px";
    body.appendChild(div);
});
