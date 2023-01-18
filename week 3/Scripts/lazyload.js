const lastModifiedDate = document.lastModified;

document.getElementById('lastModified').textContent = `Last Modified: ${lastModifiedDate}`;

const copyrightDate = new Date(lastModifiedDate);

document.getElementById('copyright').textContent = `©${copyrightDate.getFullYear()} Garrett Ourth USA`;