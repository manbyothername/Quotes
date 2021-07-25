const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn= document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

//New Quote
function newQuote(){
    //Random quote
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    
    quoteText.textContent = quote.text;
}
//Author field
if (!quote.Author) {
    authorText.textContent = 'unknown';
} else {
        authorText.textContent = authorText;
    }
// Check quote length
if(quoteText.length > 50) {
    quoteText.classList.add('long-quote');
} else {
    quoteText.classList.remove('long-quote');
}
//Get Quotes fom API
async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error){
        //Error here
    }
}
//Twee
function tweetQuote() {
    const twitterUrl =`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event Listener 
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote)
//On load
getQuotes();
