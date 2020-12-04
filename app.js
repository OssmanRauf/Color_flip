const colorlist = [
    "#F1f5f8",
    "Green",
    "Mediumpurple",
    "rgb(255, 255, 0)",
    "Red"
];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    const randomNum = getrandomnum();
    document.body.style.backgroundColor = colorlist[randomNum];
    color.textContent = colorlist[randomNum];
    console.log(`The background is ${colorlist[randomNum]}`);
});

function getrandomnum() {
    return parseInt(Math.random() * colorlist.length);
};