function compute() {
	const principle = parseFloat(document.getElementById("principle").value);
	const Rate = parseFloat(document.getElementById("Rate").value);
	const Year = parseFloat(document.getElementById("Year").value);
	const val = (principle * Rate * Year) / 100;
	document.getElementById(
		"pAmount"
	).innerHTML = `Principle Amount : ${principle} USD`;

	document.getElementById("Interest").innerHTML = `Total Interest : ${val} USD`;
	document.getElementById("Total").innerHTML = `Total Value : ${
		val + principle
	} USD`;
	document.getElementById("formDiv").style.height = "385px";
	document.getElementsByClassName("result")[0].style.display = "block";
}
