'use strict'

const quotes = require('./quotes')

const quotesLen = quotes.length

function _getEmptyObject () {
  return {
    quote: '',
    anime: '',
    id: '',
    name: '',
    success: false
  }
}

function _createQuoteObject (quote) {
  let quoteObject = _getEmptyObject()
  quoteObject = quote
  quoteObject.success = true
  return quoteObject
}

function _randomIntFromInterval (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function _searchData (inputKey, inputVal) {
  const result = []
  const isStringVal = typeof inputVal === 'string'
  if (isStringVal) {
    inputVal = inputVal.toLowerCase()
  }
  for (let i = 0; i < quotes.length; i++) {
    let currentResult = quotes[i][inputKey]
    if (isStringVal) {
      currentResult = currentResult.toLowerCase()
    }
    if (currentResult === inputVal) {
      result.push(_createQuoteObject(quotes[i]))
    }
  }
  return result
}

/**
 * Get random quote.
 */
function randomQuote () {
  return _createQuoteObject(quotes[_randomIntFromInterval(1, quotesLen)])
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
 * @param {string} anime
 */
function getQuotesByAnime (anime) {
  return _searchData('anime', anime)
}

/**
 * Get quotes by Character.
 * @param {string} character
 */
function getQuotesByCharacter (character) {
  return _searchData('name', character)
}

module.exports = {
  randomQuote: randomQuote,
  getQuote: getQuote,
  getQuotesByAnime: getQuotesByAnime,
  getQuotesByCharacter: getQuotesByCharacter
}
