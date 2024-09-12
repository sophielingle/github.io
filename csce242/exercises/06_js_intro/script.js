const doStuff = () => {
    alert("Hello World");
};

const myButton = document.getElementById("btn-click");
//myButton.onclick = doStuff;
myButton.onclick = () => {
    document.getElementById("message").innerHTML = "Hello Everyone!";
    document.getElementById("stuff").classList.add("special");
};

const byeButton = document.getElementById("btn-bye");
byeButton.onclick = () => {
    document.getElementById("message").innerHTML = "Goodbye Everyone!";
    document.getElementById("stuff").classList.remove("special");
};

const hideButton = document.getElementById("btn-hide");
hideButton.onclick = () => {
    document.getElementById("section3").className = "banish";
};

const animateButton = document.getElementById("btn-animate");
animateButton.onclick = () => {
    document.getElementById("stuff").classList.add("ball");
};

const stopButton = document.getElementById("btn-stop");
stopButton.onclick = () => {
    document.getElementById("stuff").classList.remove("ball");
};

//Showing data from an input field
/*
document.getElementById("txt-first-name").onkeyup = () => {
    const textBox = document.getElementById("txt-first-name");
    document.getElementById("result").innerHTML = textBox.value;
}
*/

document.getElementById("txt-first-name").onkeyup = (event) => {
    document.getElementById("result").innerHTML = event.target.value;
}
