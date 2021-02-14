const expect = require('chai').expect;
const movieRank = require('./index');

describe('movies', function(){
  describe('all',function(){
    it('Should be an array of Objects', function(){
      expect(movieRank.all).to.satisfy(isArrayOfObjects);

      function isArrayOfObjects(data){
        return data.every(function(item){
          return typeof item == 'object';
        })
      }
    })
    it('Should contain `The Godfather`', function(){
       expect(movieRank.all.map(movie => movie.name)
      ).to.include("The Godfather");
    });
  });

  describe('random', function(){
    it('Should return a random movie object', function(){
      var randomMovie = movieRank.random();
      expect(movieRank.all).to.include(randomMovie)
    })
  })
});