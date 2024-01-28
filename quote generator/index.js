// Get quotes from API

let quoteText = document.getElementById("quote");
let authorText = document.getElementById("author");
let twitterButton = document.getElementById("twitter");
document.getElementById("new-quote").addEventListener("click", changeQuote);

async function changeQuote() {
  const url = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  let randomN = Math.floor(1 + Math.random() * 8261);
  try {
    const response = await fetch(url);
    const data = await response.json();
    let quote = data[randomN].text;
    quote.length > 120
      ? quoteText.classList.add("long-quote")
      : quoteText.classList.remove("long-quote");
    quoteText.innerText = quote;
    let author = data[randomN].author;
    authorText.innerText = author ? author : "unknown";
  } catch (error) {
    // handle Error
    console.error(error);
  }
}
window.onload = () => changeQuote();
// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.innerText} - ${author.innerText}`;
  window.open(twitterUrl, "_blank");
}
twitterButton.addEventListener("click", tweetQuote);
