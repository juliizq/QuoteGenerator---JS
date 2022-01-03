const text = document.querySelector('#text');
const author = document.querySelector('#author');
const newQuoteBtn = document.querySelector('#new-quote');
const tweetBtn = document.querySelector('#tweet-quote');
const tumblrBtn = document.querySelector('#tumblr-quote');

const getQuote = async ()  => {
    const res = await fetch ('https://type.fit/api/quotes');
    const quotes = await  res.json();
    const num = Math.floor(Math.random()*quotes.length);
    const item = quotes[num];
    const quote = item.text;
    const authorName = item.author;
    text.innerText = quote;
    author.innerText = authorName;  
    tweetBtn.href = `https://twitter.com/intent/tweet?text=${quote}-${authorName}`
    tumblrBtn.href = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=`;

}

newQuoteBtn.addEventListener('click', getQuote);
getQuote();