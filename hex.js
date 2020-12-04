const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener('click', () => {
    const randomColor = '#' + randomcolorgenerator();

    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
    console.log('The backround is' + randomColor);
});

function randomcolorgenerator() {
    return Math.floor(Math.random() * 16777215).toString(16);
};