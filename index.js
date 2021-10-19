'use strict'

const quotes = require('./quotes')

const quotesLen = quotes.length

/**
 * An anime quote Object.
 * @typedef {Object} AnimeQuotesObject
 * @property {string} quote Quote.
 * @property {string} anime Anime name.
 * @property {number} id Quote ID.
 * @property {string} name Character name.
 * @property {boolean} success Object status.
 */

/**
 * Returns empty object.
 * @returns {AnimeQuotesObject}
 */
function _getEmptyObject () {
  return {
    quote: '',
    anime: '',
    id: '',
    name: '',
    success: false
  }
}

/*
 * Create a quote object from the input quote.
 * @param {AnimeQuotesObject} quote
 * @returns {AnimeQuotesObject}
 */
function _createQuoteObject (quote) {
  let quoteObject = _getEmptyObject()
  quoteObject = quote
  quoteObject.success = true
  return quoteObject
}

/**
 * Get a random number between min and max. Min and max both inclusive.
 * @param {number} min
 * @param {number} max
 * @returns {number} Random number.
 */
function _randomIntFromInterval (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * Search data using the input key and value.
 * @param {('quote'|'anime'|'name')} inputKey
 * @param {string} inputVal
 * @param {boolean} substringSearch
 * @returns {AnimeQuotesObject[]}
 */
function _searchData (inputKey, inputVal, substringSearch) {
  const result = []
  inputVal = inputVal.toLowerCase()
  for (let i = 0; i < quotes.length; i++) {
    const currentResult = quotes[i][inputKey].toLowerCase()
    if ((substringSearch === false && currentResult === inputVal) ||
    (substringSearch === true && currentResult.includes(inputVal))) {
      result.push(_createQuoteObject(quotes[i]))
    }
  }
  return result
}

/**
 * Get a random quote from the given quotes array.
 * @param {AnimeQuotesObject[]} quotesArray
 * @returns {AnimeQuotesObject}
 */
function _getRandomQuote (quotesArray) {
  let quote = _getEmptyObject()
  const len = quotesArray.length
  if (len > 0) {
    quote = _createQuoteObject(quotesArray[_randomIntFromInterval(0, len - 1)])
  }
  return quote
}

/**
 * Get a random quote.
 * @returns {AnimeQuotesObject}
 */
function randomQuote () {
  return _getRandomQuote(quotes)
}

/**
 * Get a random quote from the input anime.
 * @param {string} anime Anime name.
 * @param {boolean} [substringSearch=false] Partial matching for output.
 * @returns {AnimeQuotesObject}
 */
function getRandomQuoteByAnime (anime, substringSearch = false) {
  const result = getQuotesByAnime(anime, substringSearch)
  return _getRandomQuote(result)
}

/**
 * Get a random quote from the input character.
 * @param {string} character Anime character's name.
 * @param {boolean} [substringSearch=false] Partial matching for output.
 * @returns {AnimeQuotesObject}
 */
function getRandomQuoteByCharacter (character, substringSearch = false) {
  const result = getQuotesByCharacter(character, substringSearch)
  return _getRandomQuote(result)
}

/**
 * Get Quote by ID.
 * @param {number} id
 */
function getQuote (id) {
  let quote = _getEmptyObject()
  if (id > 0 && id <= quotesLen) {
    quote = _createQuoteObject(quotes[quotesLen - id])
  }
  return quote
}

/**
 * Get quotes by Anime.
 * @param {string} anime Anime name.
 * @param {boolean} [substringSearch=false] Partial matching for output.
 * @returns {AnimeQuotesObject[]}
 */
function getQuotesByAnime (anime, substringSearch = false) {
  return _searchData('anime', anime, substringSearch)
}

/**
 * Get quotes by Character.
 * @param {string} character Anime character's name.
 * @param {boolean} [substringSearch=false] Partial matching for output.
 * @returns {AnimeQuotesObject[]}
 */
function getQuotesByCharacter (character, substringSearch = false) {
  return _searchData('name', character, substringSearch)
}

module.exports = {
  randomQuote: randomQuote,
  getQuote: getQuote,
  getQuotesByAnime: getQuotesByAnime,
  getQuotesByCharacter: getQuotesByCharacter,
  getRandomQuoteByAnime: getRandomQuoteByAnime,
  getRandomQuoteByCharacter: getRandomQuoteByCharacter
}
