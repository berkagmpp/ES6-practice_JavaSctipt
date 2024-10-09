let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");

// 2. Property Listener
btn1.onclick = function () {
    alert("Property Listener");
};

// 3. addEventListener
btn2.addEventListener("click", function () {
    alert("addEventListener1");
});

btn2.addEventListener("click", function () {
    alert("addEventListener2");
});

// 4. removeEventListener
btn2.addEventListener("click", clickHandler3);

function clickHandler3() {
    alert("addEventListener3");
}

btn2.removeEventListener("click", clickHandler3);
