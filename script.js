const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
  { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" }
];
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const tweetBtn = document.getElementById('tweet');
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const { text, author } = quotes[randomIndex];
    quoteText.classList.add('fade');
    authorText.classList.add('fade');
    setTimeout(() => {
        quoteText.innerText = text;
        authorText.innerText = `— ${author}`;
        quoteText.classList.remove('fade');
        authorText.classList.remove('fade');
        tweetBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${text}" — ${author}`)}`;
    }, 300);
}
newQuoteBtn.addEventListener('click', getRandomQuote);
