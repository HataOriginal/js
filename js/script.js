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

if (personaMoviesDB.count < 10 && personaMoviesDB.count != null && personaMoviesDB.count != "") {
    alert('Просмотрено довольно мало фильмов');
} else if (personaMoviesDB.count >= 10 && personaMoviesDB.count < 30) {
    alert("Вы классический зритель");
} else if (personaMoviesDB.count >= 30) {
    alert("Вы киноман!");
} else {
    alert("Произошла ошибка");
}

// for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//           b = +prompt("На сколько вы оцените его?", "");

//     if (a != null && b != null && a != "" && b != "" && a.length < 50 ) {
//         personaMoviesDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }




console.log(personaMoviesDB);
