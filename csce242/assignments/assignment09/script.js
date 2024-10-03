class Bird {
    constructor(title, size, lifespan, food, habitat, description, pic){
        this.title = title;
        this.size = size;
        this.lifespan = lifespan;
        this.food = food;
        this.habitat = habitat;
        this.description = description;
        this.pic = pic;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("bird");

        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        const img = document.createElement("img");
        img.src = this.pic;
        section.append(h3);
        section.append(img);

        section.onclick = () => {
            document.getElementById("modal-title").innerText = this.title;
            document.getElementById("modal-pic").src = this.pic;
            document.getElementById("modal-size").innerText = "Size: " + this.size;
            document.getElementById("modal-lifespan").innerText = "Lifespan: " + this.lifespan;
            document.getElementById("modal-food").innerText = "Food: " + this.food;
            document.getElementById("modal-habitat").innerText = "Habitat: " + this.habitat;
            document.getElementById("modal-description").innerText = "Description: " + this.description;
    
            document.getElementById("modal").style.display = "block";
        };

        document.getElementsByClassName("close")[0].onclick = () => {
            document.getElementById("modal").style.display = "none";
        }

        return section;
    }
}

const birds = [];
birds.push(new Bird("Hummingbird", "2.5 inches", "3-5 years", "nectar", "Trees", "tiny birds that fly fast", "images/hummingbird.jpg"));
birds.push(new Bird("Blue Jay", "4 inches", "4 years", "nuts", "Trees", "blue birds", "images/blue-jay.jpg"));
birds.push(new Bird("Cardinal","5 inches", "6 years", "nuts", "Trees", "red birds", "images/cardinal.jpg"));
birds.push(new Bird("Robin","3 inches", "6 years", "nuts", "Trees", "batman's sidekick", "images/robin.jpg"));

birds.forEach((bird) => {
    document.getElementById("bird-list").append(bird.item);
});
