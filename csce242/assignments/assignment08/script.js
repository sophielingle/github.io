let titles = [];
titles["images/birthday.jpg"] = 'Birthdays';
titles["images/clown.jpg"] = 'Clown';
titles["images/rain.jpg"] = 'Rainy Day';
titles["images/read.jpg"] = 'Books';
titles["images/shovel.jpg"] = 'Gardening';
titles["images/work.jpg"] = 'Working';

let descriptions = [];
descriptions["images/birthday.jpg"] = 'Happy Birthday!';
descriptions["images/clown.jpg"] = 'Have a balloon!';
descriptions["images/rain.jpg"] = 'You need an umbrella!';
descriptions["images/read.jpg"] = 'Do you like to read?';
descriptions["images/shovel.jpg"] = 'You might need to wear gloves!';
descriptions["images/work.jpg"] = 'Get to work!';

/* Associative array loop */
const table = document.querySelector("#img-table"); 
let count = 0;

for(let image in titles) {
    if (count % 3 == 0) {
        var row = document.createElement("tr");
        table.append(row);
    }
    const data = document.createElement("td");
    const pic = document.createElement("img");
    pic.src = image;
    pic.classList.add('images'); 
    data.append(pic);
    row.append(data);

    pic.addEventListener('click', () => {
    document.getElementById('title').innerHTML = titles[image];
    document.getElementById('description').innerHTML = descriptions[image];
    });

    count++;
}
