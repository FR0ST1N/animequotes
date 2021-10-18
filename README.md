# animequotes

![npm](https://img.shields.io/npm/v/animequotes?style=flat-square) ![npm](https://img.shields.io/npm/dt/animequotes?style=flat-square) ![npm type definitions](https://img.shields.io/npm/types/animequotes?style=flat-square) ![NPM](https://img.shields.io/npm/l/animequotes?style=flat-square) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com)

Anime Quotes for Node.


## Install

`npm install animequotes`


## Usage

```javascript
const animeQuotes = require('animequotes')

// Get Random Quote
console.log(animeQuotes.randomQuote())

// Get Quote By ID
console.log(animeQuotes.getQuote(1))

// Get Quotes By Anime
console.log(animeQuotes.getQuotesByAnime('naruto'))

// Get Quotes By Character
console.log(animeQuotes.getQuotesByCharacter('itachi uchiha'))

// Get Random Quote From The Anime
console.log(animeQuotes.getRandomQuoteByAnime('one piece'))

// Get Random Quote From The Character
console.log(animeQuotes.getRandomQuoteByCharacter('shanks'))

// The Above 4 Functions Can Also Accept An Optional Second Argument (Boolean)
// Pass true To Do Substring Matching Instead Of Exact Matching The Input String.
console.log(animeQuotes.getRandomQuoteByCharacter('itachi', true))
```


## Example Object

```json
{
  "quote": "You are weak. Why are you so weak? Because you lack... hatred.",
  "anime": "Naruto",
  "id": 635,
  "name": "Itachi Uchiha",
  "success": true
}
```


## The More The Merrier

* Total Quotes: 8510
* No. of unique Characters: 2334
* No. of unique anime: 787


## Changelog

See [CHANGELOG.md](CHANGELOG.md).


## License

 - **MIT** : http://opensource.org/licenses/MIT
