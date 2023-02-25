// on click Function

function calculate() {
	// const amount = document.getElementById("amount");
	const p = document.getElementById("principle").value;
	const Rate = document.getElementById("Rate").value * 12;
	const Term = document.getElementById("Term").value / 1200;

	const val = Math.pow(Rate + 1, Term);
	const ans = (p * (Rate * val)) / val - 1;
	document.getElementById("amount").innerText = `Rs ${ans}`;
}
