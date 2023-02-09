const url = 'chamber/data/members.json'
const cards = document.querySelector(".cards")
const jsonFile = 'data/members.json'

async function apiFetch() {
    try {
        const response = await fetch(jsonFile);
        if (response.ok) {
            const data = await response.json();
            displayBusinesses(data.businesses);
        } else {
            throw Error(await response.text());

        }
        } catch (error) {
            console.log(error);
        }
     }




    
    const displayBusinesses = (businesses) => {
        businesses.forEach((business) => {
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let image = document.createElement("img");
        let infodiv = document.createElement("div");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let url = document.createElement("p");
        let level = document.createElement("p");
        let experience = document.createElement("p");

        card.setAttribute("class", "busCard");
        h2.textContent = `${business.name}`;
        infodiv.setAttribute("class", "infodiv")

        address.innerHTML = `Address: ${business.address}`;
        phone.innerHTML = `Phone: ${business.phoneNumber}`;
        url.innerHTML = `Website: <a href="http://${business.url}"> ${business.url}</a>`;
        level.innerHTML = `Membership Level: ${business.membershipLvl}`;
        experience.innerHTML = `Experience: ${business.yearsExp}`;

        image.setAttribute("src", business.image);
        image.setAttribute("alt", `Logo for ${business.name}`);
        
        card.appendChild(h2);
        card.appendChild(image);
        card.appendChild(infodiv);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);
        card.appendChild(level);

        document.querySelector("div.cards").appendChild(card);
    }
    )
}
    
apiFetch();






















    const gridbutton = document.querySelector("#grid");
    const listbutton = document.querySelector("#list");
    const display = document.querySelector("article");
    
    // The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.
    
    gridbutton.addEventListener("click", () => {
        // example using arrow function
        display.classList.add("grid");
        display.classList.remove("list");
    });
    
    listbutton.addEventListener("click", showList); // example using defined function
    
    function showList() {
        display.classList.add("list");
        display.classList.remove("grid");
    }
    