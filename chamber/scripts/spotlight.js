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
              var spotlightItem = document.createElement('div');

              let card = document.createElement("section");
              let name = document.createElement("h4");
              let image = document.createElement("img");
              image.setAttribute("src", business.image);
              image.setAttribute("alt", `Logo for ${business.name}`);
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

              card.appendChild(name);
              card.appendChild(image);
              card.appendChild(infodiv);
              card.appendChild(address);
              card.appendChild(phone);
              card.appendChild(url);
              card.appendChild(level);
              spotlightItem.appendChild(card);
              spotlightContainer.appendChild(spotlightItem);

        });
      })
      .catch(function(error) {
        console.error('Error fetching members:', error);
      });
  }
  
  getSpotlightMembers();