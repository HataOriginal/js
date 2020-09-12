"use strict";

const personaMoviesDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,

    start: function () {
        personaMoviesDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
        while (personaMoviesDB.count == '' || personaMoviesDB.count == null || isNaN(personaMoviesDB.count)) {
            personaMoviesDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },

    detectPersonalLevel: function () {
        if (personaMoviesDB.count < 10 && personaMoviesDB.count != null && personaMoviesDB.count != "") {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personaMoviesDB.count >= 10 && personaMoviesDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personaMoviesDB.count >= 30) {
            console.log("Вы киноман!");
        } else {
            console.log("Произошла ошибка"); 
        }
    },

    rememberMyFilms: function() {
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
    },

    toggleVisibleMyDB: function() {
        if (personaMoviesDB.privat) {
            personaMoviesDB.privat = false;
        } else {
            personaMoviesDB.privat = true;
        }
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personaMoviesDB);
        }
    },

    writeYourGenres: function () {

        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Какой ваш любимый жанр под номером ${i}?`);
            
            if (genre == null || genre == "") {
                console.log("Вы не ввели ничего!");
                i--;
                }
            else {
                personaMoviesDB.genres [ i - 1] = genre;
            }
        }

        personaMoviesDB.genres.forEach((item, i) => {
            console.log(`Ваш любимый жанр под #${i + 1} - это ${item}`);
        });
    }
};

personaMoviesDB.start();

personaMoviesDB.rememberMyFilms(); 

personaMoviesDB.detectPersonalLevel();

personaMoviesDB.toggleVisibleMyDB();

personaMoviesDB.showMyDB(personaMoviesDB.privat);

personaMoviesDB.writeYourGenres();

