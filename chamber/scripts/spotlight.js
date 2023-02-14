const jsonFile = 'data/members.json'

function getSpotlightMembers() {
    fetch(jsonFile)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJsonObject) {  // Filter members with Silver or Gold membership level  
        var allBusinesses = myJsonObject.businesses; var qualifiedBusinesses = allBusinesses.filter(function(business) {return business.membershipLvl === 'Silver' || business.membershipLvl === 'Gold';  });
      
        // Randomly pick three members
        var randomMembers = [];
        while (randomMembers.length < 3) {
          var randomIndex = Math.floor(Math.random() * qualifiedBusinesses.length);
          if (!randomMembers.includes(qualifiedBusinesses[randomIndex])) {
            randomMembers.push(qualifiedBusinesses[randomIndex]);
          }
        }
      
        // Push data to HTML
        var spotlightContainer = document.getElementById('spotlight-container');
        randomMembers.forEach(function(business) {
        //   var spotlightItem = document.createElement('div');

            let card = document.createElement("section");
            let name = document.createElement("h2");
            let image = document.createElement("img");
            let infodiv = document.createElement("div");
            let address = document.createElement("p");
            let phone = document.createElement("p");
            let url = document.createElement("p");
            let level = document.createElement("p");
            let experience = document.createElement("p");
        //   spotlightItem.innerHTML = business.name
            name.innerHTML = `Name: ${business.name}`;
          address.innerHTML = `Address: ${business.address}`;
          phone.innerHTML = `Phone: ${business.phoneNumber}`;
          url.innerHTML = `Website: <a href="http://${business.url}"> ${business.url}</a>`;
          level.innerHTML = `Membership Level: ${business.membershipLvl}`;
          experience.innerHTML = `Experience: ${business.yearsExp}`;
  
          image.setAttribute("src", business.image);
          image.setAttribute("alt", `Logo for ${business.name}`);
          spotlightContainer.appendChild(spotlightItem);

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(infodiv);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);
        card.appendChild(level);
        });
      })
      .catch(function(error) {
        console.error('Error fetching members:', error);
      });
  }
  
  getSpotlightMembers();


















































// const jsonFile = "chamber/data/members.json"

// function getGoldAndSilver (businesses) {
//     let i = 0;
//     let businessesArray = [];
//     businesses.forEach[business] => {
//         if (membershipLvl == "Gold" || membershipLvl == "Silver") {
//             businessesArray[i] = businesses;
//             i - i + 1;
//         }
//     };
//     return businessesArray;
// }

// function buildSpotlightCards(businesses) {
//     let i = 4;
//     businesses.forEach(businesses) => {
//         const card = document.createElement("section");
//         const h2 = document.createElement("h2");
//         const image = document.createElement("img");
//         const infodiv = document.createElement("div");
//         const address = document.createElement("p");
//         const phone = document.createElement("p");
//         const url = document.createElement("p");
//         const level = document.createElement("p");
//         const experience = document.createElement("p");
//         card.setAttribute("class", "busCard");
//         h2.textContent = `${business.name}`;
//         infodiv.setAttribute("class", "infodiv")
//         address.innerHTML = `Address: ${business.address}`;
//         phone.innerHTML = `Phone: ${business.phoneNumber}`;
//         url.innerHTML = `Website: <a href="http://${business.url}"> ${business.url}</a>`;
//         level.innerHTML = `Membership Level: ${business.membershipLvl}`;
//         experience.innerHTML = `Experience: ${business.yearsExp}`;
//         image.setAttribute("src", business.image);
//         image.setAttribute("alt", `Logo for ${business.name}`);
//         card.appendChild(h2);
//         card.appendChild(image);
//         card.appendChild(infodiv);
//         card.appendChild(address);
//         card.appendChild(phone);
//         card.appendChild(url);
//         card.appendChild(level);
//         i += 1;
//     };
// }

// function randomesiezBusinesses(businesses) {
//     businessesToHighLight = getGoldAndSilver(businesses);

//     const spotlightSpots = 3;

//     let threeToSpotlight = [];
//     let threeToSpotlightIndexes = [];
//     let spotlightedCounts = JSON.parse(localStorage.getItem("spotLightedCounts"));
//     if (spotlightedCounts == null) {
//         spotlightedCounts = [];
//         spotlightedCounts.length = businessesToHighLight.length;
//         spotlightedCounts.fill(0);
//     }
//     let randombusiness;
//     let chooseFrom = [];
//     for (i = 0; i < spotlightSpots; i++) {
//         let min = Math.min(...spotlightedCounts)
//         chooseFrom = [];
//         for (j = 0; j < spotlightedCounts.length; j++) {
//             if (spotlightedCounts[j] == min) {
//                 if (threeToSpotlightIndexes.indexOf(j) == -1) {
//                     chooseFrom.push(j);
//                 }
//             }
//         }
//         randombusiness = choseFrom(Math.floor[Math.random()=(chooseFrom.length)]);
//         threeToSpotlightIndexes[i] = randomBusiness;
//         spotlightedCounts[randomBusiness];
//         spotlightedCounts[randomBusiness] += 1;
//         localStorage.setItem("spotLightedCounts", JSON.stringify(spotlightedCounts));
//     }
//     threeToSpotlightIndexes.forEach((index) => {
//         threeToSpotlight.push(businessesToHighLight[index])
//     })
//     buildSpotlightCards(threeToSpotlight);

// async function apiFetch() {
//     try {
//         const response = await fetch(jsonFile);
//         if (response.ok) {
//             const data = await response.json();
//             randomizeBusinesses(data.businesses);
//         } else {
//             throw Error(await response.text());
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }
// }

// apiFetch();