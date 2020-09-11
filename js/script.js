"use strict";

const numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

console.log(numbersOfFilms);

const personaMoviesDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = +prompt("На сколько вы оцените его?", ""),
      c = prompt("Один из последних просмотренных фильмов?", ""),
      d = +prompt("На сколько вы оцените его?", "");

personaMoviesDB.movies[a] = b;
personaMoviesDB.movies[c] = d;

console.log(personaMoviesDB);
