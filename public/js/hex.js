const hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const getRandomNumber = () => Math.floor(Math.random() * hexCode.length);

const button = document.getElementById('btn');
const color = document.getElementById('color');

button.addEventListener('click', () => {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hexCode[getRandomNumber()];
    }
    // console.log(hexColor);
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});