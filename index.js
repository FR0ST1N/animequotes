'use strict'

const quotes = require('./quotes')

function randomIntFromInterval (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function searchData (inputKey, inputVal) {
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
      result.push(quotes[i])
    }
  }
  if (result.length > 0) {
    return result
  } else {
    return { Error: 'No matches were found' }
  }
}

function randomQuote () {
  return quotes[randomIntFromInterval(1, quotes.length)]
}

function getQuote (id) {
  return searchData('id', id)
}

function getQuotesByAnime (anime) {
  return searchData('anime', anime)
}

function getQuotesByCharacter (character) {
  return searchData('name', character)
}

module.exports = {
  randomQuote: randomQuote,
  getQuote: getQuote,
  getQuotesByAnime: getQuotesByAnime,
  getQuotesByCharacter: getQuotesByCharacter
}
