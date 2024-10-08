let inputBox = document.querySelector("input");
// Add dynamic li element node

// 1. appendChild()
document.getElementById("button").addEventListener("click", function () {
    let ui = document.querySelector("ul");
    let li = document.createElement("li");
    let remove = document.createElement("button");
    let removeMark = document.createTextNode("x");
    remove.setAttribute("class", "targetRemoveBtn");
    remove.addEventListener("click", removeParentNode);

    li.textContent = inputBox.value;
    remove.appendChild(removeMark);
    li.appendChild(remove);
    ui.appendChild(li);
    // appendChild() method adds a node to the end of the list
});

// 2. insertBefore()
document.getElementById("before").addEventListener("click", function () {
    let ui = document.querySelector("ul");
    let li = document.createElement("li");
    let remove = document.createElement("button");
    let removeMark = document.createTextNode("x");
    let targetLi = document.querySelector("li#target");

    remove.setAttribute("class", "targetRemoveBtn");
    remove.addEventListener("click", removeParentNode);
    remove.appendChild(removeMark);
    li.textContent = inputBox.value;
    li.appendChild(remove);
    ui.insertBefore(li, targetLi);
    // insertBefore() method inserts a node before a reference node
    // as a child of a specified parent node
});

// 3. remove
document
    .querySelector(".targetRemoveBtn")
    .addEventListener("click", function (event) {
        event.target.parentNode.remove();
    });

// 4.prentNode.remove()
function removeParentNode(event) {
    event.target.parentNode.remove();
    inputBox.value = "";
    inputBox.focus(); //Re-position the cursor to the input
}
