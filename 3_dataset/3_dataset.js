let h2 = document.querySelector("h2");
console.log(h2);
console.log(h2.dataset.test);

let liList = document.querySelectorAll("li");
let img = document.querySelector("img");

liList[0].addEventListener("click", function (event) {
    img.setAttribute("src", event.target.dataset.img);
});

liList[1].addEventListener("click", function (event) {
    img.setAttribute("src", event.target.dataset.img);
});

liList[2].addEventListener("click", function (event) {
    // console.log(event.target.dataset.img);
    img.setAttribute("src", event.target.dataset.img);
});
