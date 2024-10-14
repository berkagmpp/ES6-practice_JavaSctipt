const content = document.getElementById('content');
let stars = '';

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        stars += '*';
    }
    stars += '\r\n';
}
content.textContent = stars;

// *
// **
// ***
// ****
// *****
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i + 1; j++) {
        stars += '*';
    }
    stars += '\r\n';
}
content.textContent = stars;

// *****
// ****
// ***
// **
// *
for (let i = 0; i < 5; i++) {
    for (let j = 5; j > i; j--) {
        //for (let j = 0; j < 5 - i; j++) {     --> this is the same as the above line
        stars += '*';
    }
    stars += '\r\n';
}
content.textContent = stars;

//     *
//    **
//   ***
//  ****
// *****
for (let i = 0; i < 5; i++) {
    for (let j = 4; j > i; j--) {
        stars += ' ';
    }
    for (let k = 0; k < i + 1; k++) {
        stars += '*';
    }
    stars += '\r\n';
}
content.textContent = stars;

// *****
//  ****
//   ***
//    **
//     *
for (let i = 0; i < 5; i++) {
    for (let k = 0; k < i; k++) {
        stars += ' ';
    }
    for (let j = 5; j > i; j--) {
        stars += '*';
    }
    stars += '\r\n';
}
content.textContent = stars;

//     *
//    ***
//   *****
//  *******
// *********
for (let i = 0; i < 5; i++) {
    for (let j = 4; j > i; j--) {
        stars += ' ';
    }
    for (let k = 0; k < i * 2 + 1; k++) {
        // i * 2 + 1 is the formula for the number of stars
        stars += '*';
    }
    stars += '\r\n';
}
content.textContent = stars;

// *********
//  *******
//   *****
//    ***
//     *
for (let i = 0; i < 5; i++) {
    for (let k = 0; k < i; k++) {
        stars += ' ';
    }
    for (let j = 9; j > i * 2; j--) {
        stars += '*';
    }
    stars += '\r\n';
}
content.textContent = stars;
