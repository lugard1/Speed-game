const Random_Quote_API_URL = 'https://api.quotable.io/random';
const quoteDisplayElement = document.getElementById('quoteDisplay');
const quoteInputElement = document.getElementById('quoteInput');

function getRandomQuote() {
  return fetch(Random_Quote_API_URL)
  .then(response => response.json())
  .then(data => data.content)
}

async function renderNewQuote() {
  const quote = await getRandomQuote();
  quoteDisplayElement.innerText = quote;
  quoteInputElement.value = null;
}

renderNewQuote();