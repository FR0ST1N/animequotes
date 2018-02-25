# animequotes

![npm](https://img.shields.io/npm/v/animequotes.svg) ![license](https://img.shields.io/npm/l/animequotes.svg) ![github-issues](https://img.shields.io/github/issues/FR0ST1N/animequotes.svg)

Anime Quotes for Node.

![nodei.co](https://nodei.co/npm/animequotes.png?downloads=true&downloadRank=true&stars=true)


## Install

`npm install --save animequotes`


## Usage

 ```javascript
const animeQuotes = require("animequotes");

// Get Random Quote
console.log(animeQuotes.randomQuote());

// Get Quote by ID
console.log(animeQuotes.getQuote(1));

// Get Quotes by Anime
console.log(animeQuotes.getQuotesByAnime("Naruto"));

// Get Quotes by Character
console.log(animeQuotes.getQuotesByCharacter("Itachi Uchiha"));
```


## Example Object

```json
{ "quote": "Symmetry is what makes the world beautiful.",
  "anime": "Soul Eater",
  "id": 2799,
  "name": "Death the Kid" }
```


## The More the Merrier

* Total Quotes: 8510
* No. of unique Characters: 2334
* No. of unique anime: 787


## License

 - **MIT** : http://opensource.org/licenses/MIT
