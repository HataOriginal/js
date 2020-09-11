"use strict";

let numbersOfFilms;

console.log(numbersOfFilms);

function start() {
    numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numbersOfFilms == '' || numbersOfFilms == null || isNaN(numbersOfFilms)) {
        numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personaMoviesDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", ""),
              b = +prompt("На сколько вы оцените его?", "");
    
        if (a != null && b != null && a != "" && b != "" && a.length < 50 ) {
            personaMoviesDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms(); 


function detectPersonalLevel() {
    if (personaMoviesDB.count < 10 && personaMoviesDB.count != null && personaMoviesDB.count != "") {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personaMoviesDB.count >= 10 && personaMoviesDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personaMoviesDB.count >= 30) {
        console.log("Вы киноман!");
    } else {
        console.log("Произошла ошибка"); 
    }
}

detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personaMoviesDB);
    }
}

showMyDB(personaMoviesDB.privat);


function writeYourGenres() {

    for (let i = 1; i < 4; i++) {
        personaMoviesDB.genres[i - 1] = prompt(`Какой ваш любимый жанр под номером ${i}?`);
    }
}

writeYourGenres();

