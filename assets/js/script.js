const text = document.querySelector('#text');
const author = document.querySelector('#author');
const newQuoteBtn = document.querySelector('#new-quote');
const tweetBtn = document.querySelector('#tweet-quote');
const tumblrBtn = document.querySelector('#tumblr-quote');
const containerAuthor = document.querySelector('.container-author');


const getQuote = async ()  => {
    const res = await fetch ('https://type.fit/api/quotes');
    const quotes = await  res.json();
    const num = Math.floor(Math.random()*quotes.length);
    const item = quotes[num];
    const quote = item.text;
    if(!item.author){
      item.author = "Unknown"
    }
    const authorName = item.author;
  
    text.innerText = quote;
    author.innerText = authorName;  
    tweetBtn.href = `https://twitter.com/intent/tweet?text=${quote}-${authorName}`
    tumblrBtn.href = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=`;

}

newQuoteBtn.addEventListener('click',() => {
  let colors = [
  'linear-gradient(210deg, rgba(69,25,179,1) 0%, rgba(170,147,235,1) 100%)',
  'linear-gradient(210deg, rgba(17,173,181,1) 0%, rgba(139,241,246,1) 100%)',
  'linear-gradient(210deg, rgba(251,87,234,1) 0%, rgba(255,186,247,1) 100%)',
  'linear-gradient(210deg, rgba(138,231,218,1) 0%, rgba(119,177,169,1) 100%)',
  'linear-gradient(210deg, rgba(251,105,100,1) 0%, rgba(255,180,177,1) 100%)',
  'linear-gradient(210deg, rgba(185,100,251,1) 0%, rgba(177,199,255,1) 100%)',
    'linear-gradient(210deg, rgba(44,61,255,1) 0%, rgba(86,199,255,1) 100%)',
  ];
  
  const num = Math.floor(Math.random()*colors.length);
  const bgColor = colors[num];
  text.style.background= bgColor;
  containerAuthor.style.background= bgColor;
  console.log(bgColor)
});


newQuoteBtn.addEventListener('click', getQuote);
getQuote();

