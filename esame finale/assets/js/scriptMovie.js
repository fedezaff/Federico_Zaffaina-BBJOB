const urlParams = new URLSearchParams(window.location.search);
const movie_id = urlParams.get('movie_id');




// var href = window.location.search
// var origin = href - "?movie_id="
// console.log(href)

function getMovie(idMovie) {
    // $.ajax('https://api.themoviedb.org/3/movie/' + idMovie)
    $.ajax({
        url: `https://api.themoviedb.org/3/movie/${idMovie}`,
        method: 'GET',
        data: {
            api_key: '4467fc091e2bf5ba8afd0d36bee5b88c',
            language: 'it-IT'
        }
    }).done((data) => { // function(data) {}
        addMovie(data);
    })
    $.ajax({
        url: `https://api.themoviedb.org/3/movie/${idMovie}/videos`,
        method: 'GET',
        data: {
            api_key: '4467fc091e2bf5ba8afd0d36bee5b88c',
            language: 'it-IT'
        }
    }).done((info) => { // function(data) {}
        addTrailer(info.results);
    })
    $.ajax({
        url: `https://api.themoviedb.org/3/movie/${idMovie}/credits`,
        method: 'GET',
        data: {
            api_key: '4467fc091e2bf5ba8afd0d36bee5b88c',
            language: 'it-IT'
        }
    }).done((cast) => { // function(data) {}
        addCast(cast.cast)

    })
    $.ajax({
        url: `https://api.themoviedb.org/3/movie/${idMovie}/images`,
        method: 'GET',
        data: {
            api_key: '4467fc091e2bf5ba8afd0d36bee5b88c',
        }
    }).done((photo) => { // function(data) {}
        console.log(photo)
        addPhoto(photo.backdrops)
    })
    $.ajax({
        url: `https://api.themoviedb.org/3/movie/${idMovie}/similar`,
        method: 'GET',
        data: {
            api_key: '4467fc091e2bf5ba8afd0d36bee5b88c',
            language: 'it-IT'
        }
    }).done((similar) => { // function(data) {}
        addSimilar(similar.results)
    })
}

function addMovie(movies) {
    var film = document.querySelector('.movie');
    film.innerHTML = '';

    [movies].forEach(movie => {
        film.innerHTML += `
            <div class="p-4 w-1/3 movie-details">
                <div class="container-cover">
                    <div class="movie-cover" style="background-image: url('https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}')"></div>
                </div>
                <h2 class="pb-4">${movie.title}</h2>
                <h3 class="pb-4">DESCRIZIONE</h3>
                <p class="pb-4">${movie.overview}</p>
                <h3>ATTORI IN PRIMO PIANO</h3>
            </div>
        `
    });
}

function addTrailer(trailer) {
    var video = document.querySelector('.video');
    video.innerHTML = '';

        video.innerHTML = `
            <iframe class="trailer img-centrata" width="375" height="270"
            src="https://www.youtube.com/embed/${trailer[0].key}?autoplay=1">
            </iframe>
        `
};

function addCast(cast) {
    var protagonist = document.querySelector('.protagonist');
    protagonist.innerHTML = '';
    
        cast.forEach(cast => {
            protagonist.innerHTML += `
                <div class="swiper-slide slide-card pl-4" style="width:115px">
                    <div class="cast-card">
                        <div class="no-photo">
                            <div class="cast-cover" style="background-image: url('https://image.tmdb.org/t/p/w600_and_h900_bestv2${cast.profile_path}')"></div>
                        </div>
                        <div class="pl-1 pt-1 container-text-cast">
                        <h4>${cast.name}</h4>
                        <small class="very-small">${cast.character}</small>
                        </div>
                    </div>
                </div>
        `
    });
};

function addPhoto(photo) {
    var wallpaper = document.querySelector('.wallpaper');
    wallpaper.innerHTML = '';
        photo.forEach(photo => {
            wallpaper.innerHTML += `
                <div class="swiper-slide center">
                    <img class="immagini" src="https://image.tmdb.org/t/p/w533_and_h300_bestv2${photo.file_path}" alt="">
                </div>
        `
    });
};


function addSimilar(similar) {
    var corellati = document.querySelector('.corellati');
    corellati.innerHTML = '';
    
        similar.forEach(similar => {
            corellati.innerHTML += `
                <div class="swiper-slide slide-card pl-4" style="width:115px">
                    <a href="movie.html?movie_id=${similar.id}">
                        <div style="position: relative; border-radius: 10px; height: 151px; width: 101px; background-size:cover; background-image: url('https://image.tmdb.org/t/p/w600_and_h900_bestv2${similar.poster_path}')"></div>
                        <h4>${similar.title}</h4>
                    </a>
                </div>
        `
    });
};

getMovie(movie_id)