const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn= document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


let apiQuotes = [];

// Show laoding
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;

}

// Hide loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden =true;
}
//New Quote
function newQuote(){
    complete();
    //Random quote
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    
    quoteText.textContent = quote.text;
    authorText.textContent = quote.author;
}

// Check quote length
if(quoteText.length > 50) {
    quoteText.classList.add('long-quote');
} else {
    quoteText.classList.remove('long-quote');
}
// Set quote
quoteText.textContent = quoteText;
complete();
//Author field
authorText.textContent = quote.author ? quote.author : "Unknown";
//Get Quotes fom API
async function getQuotes(){
    loading();
    const apiUrl = 'https://zenquotes.io/api/random';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error){
        //Error here
    }
}
//Tweet

//Event Listener 
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote)
//On load
getQuotes();
