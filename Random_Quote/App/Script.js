const twitter = document.getElementById("twitter");

const api = fetch("https://source.unsplash.com/random");
/*
 Generate Random  Quote via Random Index
 this Function generators a random Index via which we can access the 
 text and author name of a Particular Quote 
 Basically it gives us access to the Array of Objects

 */
const Quote = document.getElementById("quote");
const author = document.getElementById("author");

let Q_data = "";
const getRandomQuote = () => {
	const randomIndex = Math.floor(Math.random() * 1643);
	Q_data = readData[randomIndex];
	Quote.innerText = `${Q_data.text}`;
	Q_data.author == null
		? (author.innerText = "- Unknown ")
		: (author.innerText = `- By ${Q_data.author}`);
};

const tweetMe = () => {
	let tweet = `https://twitter.com/intent/tweet?text=${Q_data.text}`;
	window.open(tweet);
};

// Fetch API
/*
In this Async Function we fetch data from the api and 
wait for the response.

*/
let readData;
const getQuotes = async () => {
	try {
		let data = await fetch("https://type.fit/api/quotes");
		readData = await data.json();
		getRandomQuote();
		let bg = await fetch("https://source.unsplash.com/random");
	} catch {}
};

getQuotes();

qBtn.addEventListener("click", getRandomQuote);
twitter.addEventListener("click", tweetMe);
