// get methods
let title = document.getElementById("title");
console.log(title.textContent);
title.textContent = "Fruits";
console.log(title.textContent);

let items = document.getElementsByClassName("item");
console.log(items);
console.log(items[0]);
console.log("Banana: ", items[0]);

let uilist = document.getElementsByTagName("ul");
console.log(uilist);

// HTML요소 querySelector
let h2 = document.querySelector("#title");
console.log(h2);

let item = document.querySelector(".item");
console.log(item);
// querySelector는 반드시 첫번째 요소만 가져온다.
// 여러개의 요소를 가져오고 싶다면 querySelectorAll을 사용한다.
let items2 = document.querySelectorAll(".item");
console.log(items2);
console.log(items2[0]);
console.log(items2[1]);
console.log(items2[2]);

// title.textContent = "<span>People<span>";
// console.log(title.textContent);
// // textContent는 태그를 그대로 출력한다.
// title.innerHTML = "<span>3대 운동!!!!<span>";
// console.log(title.textContent);
// // innerHTML은 태그를 해석하여 출력한다.
// document.querySelector("body").innerHTML = "<h1>펑</h1>";
// // // body태그에 있는 모든내용을 지우고 변경

// Attribute(속성) 조작
let input = document.querySelector("input");
input.setAttribute("placeholder", "Please input the fruit name");
input.removeAttribute("placeholder");
input.setAttribute("required", "");
document.querySelector("p").setAttribute("class", "red");
// document.querySelector("p").style.color = "blue";
document.querySelector("p").classList.add("dark", "blue");
