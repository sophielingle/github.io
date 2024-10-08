/* Toggle Button */
document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
};

/* Gets the Books from JSON File */
const getBooks = async () => {
    const url = "https://sophielingle.github.io/csce242/json/books.json";
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

/* Shows Best Sellers */
const showBestSellers = async () => {
    const books = await getBooks();
    books.forEach((book) => {
        if (book.bestSeller == "yes") {
            document.getElementById("book-section").append(createBookSection(book));
        }
    });
};

/* Shows Books by Genre */
const showBooksByGenre = async (genre, sectionId) => {
    const books = await getBooks();
    books.forEach((book) => {
        if (book.genre == genre) {
            document.getElementById(sectionId).append(createBookSection(book));
        }
    });
};

/* Creates each Book Section */
const createBookSection = (book) => {
    const a = document.createElement("a");
    a.href = `book${book.id}.html`;

    const section = document.createElement("section");
    section.classList.add("columns", "best-seller");

    const img = document.createElement("img");
    img.src = `https://sophielingle.github.io/csce242/projects/part6/images/${book.image}`;
    img.classList.add("one");
    section.append(img);

    const div = document.createElement("div");
    div.classList.add("four");
    const h2 = document.createElement("h2");
    h2.innerHTML = book.title;
    const h3 = document.createElement("h3");
    h3.innerHTML = book.author;
    const p = document.createElement("p");
    p.innerHTML = book.description;
    
    div.append(h2, h3, p);
    section.append(div);
    a.append(section);

    return a;
};

/* Gets the Book ID from the URL */
const getBookIdFromUrl = () => {
    const path = window.location.pathname;
    const bookId = path.split('/').pop().split('.')[0]; // Get the last part of the path and remove '.html'
    return parseInt(bookId.replace('book', '')); // Convert to an integer
};

/* Shows Individual Book Pages */
const showIndividualBook = async (id, sectionId) => {
    const books = await getBooks();
    books.forEach((book) => {
        if (book.id === id) { // Compare directly as both are integers now
            document.getElementById(sectionId).append(createFullBookSection(book));
        }
    });
};

/* Creates each Full Book Section */
const createFullBookSection = (book) => {
    const div = document.createElement("div");
    div.classList.add("best-seller");

    const section = document.createElement("section");
    section.classList.add("columns");

    const img = document.createElement("img");
    img.src = `https://sophielingle.github.io/csce242/projects/part6/images/${book.image}`;
    img.classList.add("one", "book-img");
    section.append(img);

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info", "four");

    const h2 = document.createElement("h2");
    h2.innerHTML = book.title;
    const h3 = document.createElement("h3");
    h3.innerHTML = "Author: " + book.author;
    const p1 = document.createElement("p");
    p1.innerHTML = "Publication Year: " + book.publication_year;
    const p2 = document.createElement("p");
    p2.innerHTML = "Genre: " + book.genre;

    infoDiv.append(h2, h3, p1, p2);
    section.append(infoDiv);

    const p3 = document.createElement("p");
    p3.innerHTML = book.extended_description;
    const p4 = document.createElement("p");
    p4.innerHTML = book.price;

    div.append(section, p3, p4);

    return div;
};

document.addEventListener("DOMContentLoaded", async () => {
    const bookId = getBookIdFromUrl(); // Get the book ID from the URL
    console.log(`Book ID: ${bookId}`);
    await showIndividualBook(bookId, "book-details-section"); // Call the function with the section ID where you want to display the book details
});

showBestSellers();
showBooksByGenre("Horror", "horror-section");
showBooksByGenre("Drama", "drama-section");
showBooksByGenre("Mystery", "mystery-section");
showBooksByGenre("Romance", "romance-section");