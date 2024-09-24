/* Nav Bar Icon */
document.querySelector("#toggle-nav-down").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
    document.getElementById("toggle-nav-up").classList.toggle("hidden");
    document.querySelector("#toggle-nav-down").classList.toggle("hidden");
};

document.querySelector("#toggle-nav-up").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
    document.querySelector("#toggle-nav-up").classList.toggle("hidden");
    document.getElementById("toggle-nav-down").classList.toggle("hidden");
};

document.getElementById("exercise1").onclick = (event) => {
    event.preventDefault(); 
    document.getElementById("exercise1-div").classList.add("show");
    document.getElementById("exercise2-div").classList.remove("show");
};

document.getElementById("exercise2").onclick = (event) => {
    event.preventDefault(); 
    document.getElementById("exercise1-div").classList.remove("show");
    document.getElementById("exercise2-div").classList.add("show");
};

/* Exercise 1 */
document.getElementById("myRange").onchange = (e) => {
    document.querySelector(":root").style.setProperty("--r-value", e.target.value);
    const color = e.target.value;
    const messageP = document.getElementById("color-message");

    if (color >= 150) {
        messageP.innerHTML = "bright red";
    }
    else if (color <= 80) {
        messageP.innerHTML = "very dark red";
    }
    else {
        messageP.innerHTML = "dark red";
    }
};

/* Exercise 2 */
document.querySelectorAll("button.size-btn").onclick = (e) => {
    if (e.target.innerHTML == "Small") {
        document.getElementById("random-1").classList.toggle("hidden");
        document.getElementById("random-2").classList.add("hidden");
        document.getElementById("random-3").classList.add("hidden");
    }
    else if (e.target.innerHTML == "Medium") {
        document.getElementById("random-1").classList.add("hidden");
        document.getElementById("random-2").classList.toggle("hidden");
        document.getElementById("random-3").classList.add("hidden");
    }
    else if (e.target.innerHTML == "Large") {
        document.getElementById("random-1").classList.add("hidden");
        document.getElementById("random-2").classList.add("hidden");
        document.getElementById("random-3").classList.toggle("hidden");
    }
};

/*
// Function to show picture based on the button clicked
const showPicture = (size) => {
        const pictureUrl = `https://picsum.photos/${size}`;
        
        // Set image source to display picture
        document.getElementById('pictureDisplay').src = pictureUrl;
    };

// Event listeners for picture size buttons (Small, Medium, Large)
document.getElementById('smallButton').addEventListener('click', () => showPicture(200));
document.getElementById('mediumButton').addEventListener('click', () => showPicture(400));
document.getElementById('largeButton').addEventListener('click', () => showPicture(600));
*/