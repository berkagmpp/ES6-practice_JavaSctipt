const content = document.getElementById('content');
let stars = '';

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        stars += '*';
    }
    stars += '\r\n';
}
content.textContent = stars;

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i + 1; j++) {
        stars += '*';
    }
    stars += '\r\n';
}
content.textContent = stars;

for (let i = 0; i < 5; i++) {
    for (let j = 5; j > i; j--) {
        stars += '*';
    }
    stars += '\r\n';
}
content.textContent = stars;
