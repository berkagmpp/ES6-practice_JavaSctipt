let inputBox = document.getElementById("input-box");
let img = document.querySelector("img");

// inputBox.addEventListener("keypress", function (event) {
//     console.log("Key pressed");
//     console.log(event.key);
//     console.log(event.keyCode);
// });

// inputBox.addEventListener("keydown", function (event) {
//     console.log("Keydown");
// });

// inputBox.addEventListener("keyup", function (event) {
//     console.log("Keyup");
// });

// inputBox.addEventListener("focus", function (event) {
//     alert("Focus");
// });

inputBox.addEventListener("change", function (event) {
    console.log("change");
});

img.addEventListener("error", function (event) {
    console.log("error");
    event.target.src = "../../img/koala.jpg";
    // can set to show another image when error occurs
});
