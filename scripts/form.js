const kp1 = document.querySelector("#password");
const kp2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "User name DOES NOT MATCH!";
		message.style.display = "block";
		kp2.style.backgroundColor = "#aa3333";
		kp2.style.color = "#fff";
		kp2.focus();
		kp2.value = "";
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}

const rating = document.getElementById("rating");
const rangevalue = document.getElementById("r");

function displayRatingValue() {
    rating.innerHTML = rangevalue.value;
}

rangevalue.addEventListener('change', displayRatingValue);
rangevalue.addEventListener('input', displayRatingValue);

function displayVariable(){
const variable1 = document.querySelector("#tdname");
const variable2 = document.querySelector("#fullname");
variable1.innerHTML = variable2.value;

const variable3 = document.querySelector("#tdemail");
const variable4 = document.querySelector("#email");
variable3.innerHTML = variable4.value;

const variable5 = document.querySelector("#tdrating");
const variable6 = document.querySelector("#r");
variable5.innerHTML = variable6.value;

const variable7 = document.querySelector("#tdusername");
const variable8 = document.querySelector("#password");
variable7.innerHTML = variable8.value;

document.getElementById("table").style.display = "block"
document.getElementById("inputform").style.display = "block"
}

contactForm.addEventListener('submit', (event) => {     
	event.preventDefault(); displayVariable();});

