/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
const quotes = [
	{
		quote: "The maniac's in the mailbox!",
		source: 'Patrick Star',
		citation: 'SpongeBob',
		year: '2003',
		genre: 'Comedy',
	},
	{
		quote: 'Do or do not, there is no try',
		source: 'Yoda',
		citation: 'George Lucas',
		year: '1975',
		genre: 'Inspiration',
	},
	{
		quote: "You miss every shot you don't take",
		source: 'Wayne Gretsky',
		citation: 'Michael Scott',
		year: '2011',
		genre: 'Inspriation',
	},
	{
		quote:
			"Trust is not built in big sweeping moments, it's built in small moments every day.",
		source: 'Brene Brown',
		citation: '',
		year: '2011',
		genre: 'Betterment',
	},
	{
		quote: 'With great power comes great responsibility',
		source: 'Uncle Ben',
		citation: 'Spiderman',
		year: '2002',
		genre: 'Drama',
	},
];

/***
 * `getRandomQuote` function
 ***/
// Returns a random quote from the quotes array
function getRandomQuote() {
	return quotes[Math.floor(Math.random() * quotes.length)];
}

/***
 * `printQuote` function
 ***/
function printQuote() {
	//Store a random quote object in the variable randQuote
	const randQuote = getRandomQuote();

	//Create a string to store the quote and source values from the random quote object
	let htmlString = `<p class='quote'>${randQuote.quote}</p><p class='source'>${randQuote.source}`;

	//Check to see if a citation value exists, if so, add to the 2nd p tag
	if (randQuote.citation) {
		htmlString = htmlString.concat(
			`<span class='citation'>${randQuote.citation}</span>`
		);
	}

	//Check to see if a genre value exists, if so, add to the 2nd p tag
	if (randQuote.genre) {
		htmlString = htmlString.concat(
			`<span class='genre'> ${randQuote.genre}</span>`
		);
	}

	//Check to see if a year value exists, if so, add to the 2nd p tag
	if (randQuote.year) {
		htmlString = htmlString.concat(
			`<span class='year'>${randQuote.year}</span>`
		);
	}

	//close the second p tag
	htmlString = htmlString.concat('</p>');

	//print the quote in all its glory to the page
	document.getElementById('quote-box').innerHTML = htmlString;

	//change the background color to a random color
	document.body.style.backgroundColor = `rgb(${Math.floor(
		Math.random() * 255
	)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)} )`;
}

//Run the printQuote function every 10 seconds
setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
	.getElementById('load-quote')
	.addEventListener('click', printQuote, false);
