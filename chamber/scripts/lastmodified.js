// const lastModifiedDate = document.lastModified;

// document.getElementById('lastModified').textContent = `Last Modified: ${lastModifiedDate}`;

// const copyrightDate = new Date(lastModifiedDate);

// document.getElementById('copyright').textContent = `©${copyrightDate.getFullYear()} Garrett Ourth USA`;



// var d = new Date();

//     // Set the value of the "date" field
//     document.getElementById("date").value = d.toDateString();

//     // Set the value of the "time" field
//     var hours = d.getHours();
//     var mins = d.getMinutes();
//     var seconds = d.getSeconds();
//     document.getElementById("time").value = hours + ":" + mins + ":" + seconds;

const lastModified = document.lastModified;
const lastModifiedFooter = document.getElementById("lastModified");
lastModifiedFooter.innerHTML = `Last Modified: ${lastModified}`;
