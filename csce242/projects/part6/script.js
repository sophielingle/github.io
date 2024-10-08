/* Toggle Button */
document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
};

/* Best Sellers Page Load */
const getBooks = async () => {
    const url = "part6/books.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

const showBooks = async () => {
    const books = await getBooks();

    books.forEach((book) => {
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
