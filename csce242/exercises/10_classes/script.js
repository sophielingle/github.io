class Dog {
    constructor(title, breed, color, age, size, pic) {
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("dog");

        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);

        const columnsDiv = document.createElement("div");
        columnsDiv.classList.add("columns");
        section.append(columnsDiv);
        const firstColumn = document.createElement("div");
        columnsDiv.append(firstColumn);
        const secondColumn = document.createElement("div");
        columnsDiv.append(secondColumn);
        secondColumn.classList.add("hidden");

        const img = document.createElement("img");
        img.src = this.pic;
        firstColumn.append(img);

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        const p4 = document.createElement("p");
        p1.innerHTML = "Breed: " + this.breed;
        p2.innerHTML = "Color: " + this.color;
        p3.innerHTML = "Age: " + this.age;
        p4.innerHTML = "Size: " + this.size;
        secondColumn.append(p1);
        secondColumn.append(p2);
        secondColumn.append(p3);
        secondColumn.append(p4);

        const expCon = document.createElement("a");
        expCon.href = "#";
        expCon.innerHTML = "&#x2964;";
        h3.append(expCon);

        expCon.onclick = () => {
            secondColumn.classList.toggle("hidden");
        };

        return section;
    }
}

const dogs = [];
//const myDog = new Dog("molly", "pit bull", "brown", 4, "xs", "images/molly.jpg")
dogs.push(new Dog("Coco", "Morkie", "Black", 5, "small", "images/yorkie.jpg"));
dogs.push(new Dog("Sam", "Golden", "Yellow", 1, "med", "images/golden-retriever.jpg"));
dogs.push(new Dog("Gerald", "Pit Bull", "White", 3, "lg", "images/pitt-bull.jpg"));

dogs.forEach((dog) => {
    document.getElementById("dog-list").append(dog.item);
});

document.getElementById