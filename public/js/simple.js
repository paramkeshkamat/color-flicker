const colors = ["red", "blue", "lime", "yellow", "pink", "brown", "orange", 
"aqua", "grey", "tomato", "coral", "dodgerblue", "lightgray", "green", "khaki", 
"forestgreen", "midnightblue", "navy", "teal", "magenta", "violet", "purple"];

const getRandomNumber = () => Math.floor(Math.random() * colors.length);

const button = document.getElementById('btn');
const color = document.getElementById('color');

button.addEventListener('click',() => {
    const colorNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[colorNumber];
    color.textContent = colors[colorNumber];
});

