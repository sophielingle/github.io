const getBreweries = async() => {
    const url = "https://api.openbrewerydb.org/breweries";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error) {
        console.log(error);
    }
};

const showBreweries = async() => {
    const breweries = await getBreweries();

    breweries.forEach((brewery)=>{
        document.getElementById("breweries-section").append(getBrewerySection(brewery));
    });
};

const getBrewerySection = (brewery) => {
    const section = document.createElement("section");
    section.classList.add("brewery");

    const a = document.createElement("a")
    a.href = brewery.website_url;
    a.innerHTML = brewery.name
    
    const h3 = document.createElement("h3");
    h3.append(a);
    section.append(h3);
   
    const p = document.createElement("p");
    p.innerHTML = brewery.brewery_type;
    section.append(p);

    return section;
};

//Show all of the shoes when the page loads
showBreweries();