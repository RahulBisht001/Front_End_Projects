let string = "";
let buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach((button) => {
	button.addEventListener("click", (event) => {
		if (event.target.innerHTML == "=") {
			string = eval(string);
			document.querySelector("input").value = string;
		} else if (event.target.innerHTML == "AC") {
			string = "";
			document.querySelector("input").value = string;
		} else {
			string = string + event.target.innerHTML;
			document.querySelector("input").value = string;
		}
	});
});

function openBar() {}

let barMenu = document.getElementById("barMenu");
let bar = document.getElementById("bar");
let.menu = document.getElementById("menu");
function openBar() {
	barMenu.style.display = "flex";
	bar.style.display = "none";
	// menu.style.height = "100px";
	// menu.style.width = "265px;";
}
function closeBar() {
	barMenu.style.display = "none";
	bar.style.display = "flex";
}
