let inputBox = document.querySelector("input");

// Add dynamic li element node

// 1. appendChild()
document.getElementById("button").addEventListener("click", function () {
    let ui = document.querySelector("ul");
    let li = document.createElement("li");
    li.textContent = inputBox.value;
    ui.appendChild(li);
    // appendChild() method adds a node to the end of the list
});

// 2. insertBefore()
document.getElementById("before").addEventListener("click", function () {
    let ui = document.querySelector("ul");
    let li = document.createElement("li");
    let targetLi = document.querySelector("li#target");
    li.textContent = inputBox.value;
    ui.insertBefore(li, targetLi);
    // insertBefore() method inserts a node before a reference node
    // as a child of a specified parent node
});
