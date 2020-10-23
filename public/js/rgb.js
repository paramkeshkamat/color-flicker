const getRandomNumber = () => Math.floor(Math.random() * 256);

const button = document.getElementById('btn');
const color = document.getElementById('color');

function hexFlip(){
        const rgbColor = `RGB(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
        // console.log(rgbColor);
        document.body.style.backgroundColor = rgbColor;
        color.textContent = rgbColor;
}
button.addEventListener('click', hexFlip);

// setInterval(hexFlip, 50);