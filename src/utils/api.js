export function fetchArticles(coin) {
  return fetch(
    `https://newsapi.org/v2/everything?q=${coin}+crypto&language=en&
    sortBy=relevant&apiKey=d5c0c2ca27914a2d9ecb78f5e519fbb6`
  ).then(response => response.json());
}

export function fetchRedditPosts(sort, time, coin) {
  const urlSettings = `+crypto&restrict_sr=&sort=${sort}&t=${time}`;
  return fetch(`https://www.reddit.com/search.json?q=title%3A${coin}${urlSettings}`).then(response => response.json());
}

export function fetchCoins() {
  return fetch('https://api.coinmarketcap.com/v1/ticker/')
  .then(response => response.json());
}
