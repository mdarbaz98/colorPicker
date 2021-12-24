const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

var body = document.querySelector('body');
var color = document.getElementById('col')
var button = document.querySelector('button');


button.addEventListener('click', function () {
    let hex = "#"
    for (let i = 1; i <= 6; i++) {
        hex = hex + colors[randomNumber()];
    }
    color.textContent = hex;
    body.style.backgroundColor = hex;

    function randomNumber() {
    return Math.floor(Math.random() * colors.length)
}

});

