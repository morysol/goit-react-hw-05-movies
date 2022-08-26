import axios from 'axios';

// Ключ API (v3 auth)
// c98b6ba13627c0ee26c9ebb0229dfccc
// Пример API-запроса
// https://api.themoviedb.org/3/movie/550?api_key=c98b6ba13627c0ee26c9ebb0229dfccc
// Ключ доступа к API (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOThiNmJhMTM2MjdjMGVlMjZjOWViYjAyMjlkZmNjYyIsInN1YiI6IjYzMDhmMzIzY2E3ZWM2MDA5MjQ3MDA0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._WlaFlENGwTPpAy3F1zrzMwJQIm_wiG9jWxHPALqiIw
//
const API_KEY = 'c98b6ba13627c0ee26c9ebb0229dfccc';
//
const LANGUAGE = 'ru-RU';
// minLength: 2
// pattern: ([a-z]{2})-([A-Z]{2})
// default: en-US
// optional

const QUERY = 'q';
// string
// Pass a text query to search. This value should be URI encoded.

// minLength: 1
// required
//
const PAGE = 1;
// integer
// Specify which page to query.
// minimum: 1
// maximum: 1000
// default: 1
// optional

const INCLUDE_ADULT = true;
// boolean
// Choose whether to inlcude adult (pornography) content in the results.
// default
// optional

//
// region
// string
// Specify a ISO 3166-1 code to filter release dates. Must be uppercase.

// pattern: ^[A-Z]{2}$
// optional
//
// year;
// integer;
// optional;

// //
// primary_release_year;
// integer;
// optional;

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

const queryString = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${QUERY}&page=${PAGE}&language=${LANGUAGE}include_adult=${INCLUDE_ADULT}`;

console.log(queryString);

//  //  // npm i react-query
//  //  // npm install axios

export const getMoviesList = () => {
  axios
    .get(queryString)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};
