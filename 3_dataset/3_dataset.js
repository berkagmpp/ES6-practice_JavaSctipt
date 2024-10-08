let h2 = document.querySelector("h2");
console.log(h2);
console.log(h2.dataset.test);

let liList = document.querySelectorAll("li");
let img = document.querySelector("img");
let selectedItem = document.querySelector(".selected-item");

liList[0].addEventListener("click", function (event) {
    img.setAttribute("src", event.target.dataset.img);
    selectedItem.textContent = event.target.textContent;
});

liList[1].addEventListener("click", function (event) {
    img.setAttribute("src", event.target.dataset.img);
    selectedItem.textContent = event.target.textContent;
});

liList[2].addEventListener("click", function (event) {
    // console.log(event.target.dataset.img);
    img.setAttribute("src", event.target.dataset.img);
    selectedItem.textContent = event.target.textContent;
});

const btn = document.querySelector("[data-tooltip]");

btn.dataset.tooltip = "This is a tooltip";
console.log(btn.dataset.tooltip);
