const getIceCream = async () => {
    const url = "https://portiaportia.github.io/json/ice-creams.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

const showIceCream = async () => {
    const iceCreams = await getIceCream();

    iceCreams.forEach((iceCream) => {
        document.getElementById("ice-cream-section").append(getIceCreamSection(iceCream));
    });
};

const getIceCreamSection = (iceCream) => {
    const section = document.createElement("section");
    section.classList.add("ice-cream");
    section.classList.add("container");
   
    const img = document.createElement("img");
    img.src = `https://portiaportia.github.io/json/images/ice-creams/${iceCream.image}`;
    section.append(img);

    const div = document.createElement("div");
    div.classList.add("overlay");
    div.innerHTML = iceCream.name;
    section.append(div);

    return section;
};

showIceCream();
