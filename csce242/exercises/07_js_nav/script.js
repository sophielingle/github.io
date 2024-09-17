/* When the hamburger is clicked, toggle between showing and hiding the nav items */

/*
document.getElementById("toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
};
*/

document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
};

/* Don't go to link's destination when clicked */
document.getElementById("click-link").onclick = (event) => {
    event.preventDefault(); //don't go to the link's destination
    console.log("you clicked a link");
};

/* Change the ball color */
/*
document.getElementById("txt-color").onchange = (e) => {
    document.getElementById("ball").style.setProperty("background", e.target.value);
};
*/

document.getElementById("txt-color").onchange = (e) => {
    document.querySelector(":root").computedStyleMap.setProperty("--ball-color", e.target.value);
};
