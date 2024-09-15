/* Counter */
let count = 0;
document.getElementById("count-btn").onclick = () => {
    count+=1;
    document.getElementById("count-btn").innerHTML = count;
}

/* Image */
document.getElementById("random-img").onclick = () => {
    window.location.reload();
}

/* Slider */
document.getElementById("myRange").onclick = () => {
    document.getElementById("slider-img").style.left = document.getElementById("myRange").value +'px';
}