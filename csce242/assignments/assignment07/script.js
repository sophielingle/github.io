//Draw Button
document.getElementById("draw-btn").onclick = () => {
    const map = document.getElementById("space");
    const amount = parseInt(document.getElementById("star-number").value);
    const error = document.getElementById("error");
    const msg = document.getElementById("star-msg");
    error.innerHTML = "";

    if(isNaN(amount) || amount <= 0) {
        error.innerHTML = "*Invalid Input*";
        return;
    }

    map.innerHTML = "";

    const starSize = 20; 
    const mapWidth = 400;
    const mapHeight = 500;

    for(let i = 0; i < amount; i++) {
        const star = document.createElement("div");
        star.setAttribute("class", "star");

        const x = Math.random() * (mapWidth-starSize); 
        const y = Math.random() * (mapHeight-starSize); 

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        map.append(star);
        msg.innerHTML = "";

        star.addEventListener('click', function() {
            msg.innerHTML = `You clicked on star ${i+1}`;
            //alert(`You clicked on star ${i+1}`);
        });
    }
};