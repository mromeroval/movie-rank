const movies = require('./movies.json')
const uniqueRandomArray = require('unique-random-array')

module.exports = {
  all: movies,
  random: uniqueRandomArray(movies)
}