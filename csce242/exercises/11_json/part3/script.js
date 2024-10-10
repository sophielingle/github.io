const getDrinks = async() => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error) {
        console.log(error);
    }
};

const showDrinks = async() => {
    const response = await getDrinks();
    const drinks = response.drinks;

    drinks.forEach((drink)=>{
        document.getElementById("cocktails").append(getDrinkSection(drink));
    });
};

const getDrinkSection = (drink) => {
    const section = document.createElement("section");
    section.classList.add("drink");

    const img = document.createElement("img");
    img.src = drink.strDrinkThumb;
    section.append(img);

    const h3 = document.createElement("h3");
    h3.innerHTML = drink.strDrink;
    section.append(h3);
   
    const p1 = document.createElement("p");
    p1.innerHTML = drink.strAlcoholic;
    const p2 = document.createElement("p");
    p2.innerHTML = "Glass Type: " + drink.strGlass;

    section.append(p1, p2);

    return section;
};

showDrinks();