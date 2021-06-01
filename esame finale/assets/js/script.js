function getMovie(){

    $.ajax({
        url: `https://api.themoviedb.org/3/discover/movie?with_genres=10751`,
        method: 'GET',
        data: {
            api_key: '816e0fc330a4273d11644113cce78339',
            lenguage: 'it-IT'
        }
    }
    ).done((data1) => {
        addFamily(data1.results);
    })

    $.ajax({
        url: `https://api.themoviedb.org/3/discover/movie?with_genres=12`,
        method: 'GET',
        data: {
            api_key: '816e0fc330a4273d11644113cce78339',
            lenguage: 'it-IT'
        }
    }
    ).done((data2) => {
        addAdventure(data2.results);
    })

    $.ajax({
        url: `https://api.themoviedb.org/3/discover/movie?with_genres=10752`,
        method: 'GET',
        data: {
            api_key: '816e0fc330a4273d11644113cce78339',
            lenguage: 'it-IT'
        }
    }
    ).done((data3) => {
        addWar(data3.results);
    })

    $.ajax({
        url: `https://api.themoviedb.org/3/discover/movie?with_genres=35`,
        method: 'GET',
        data: {
            api_key: '816e0fc330a4273d11644113cce78339',
            lenguage: 'it-IT'
        }
    }
    ).done((data4) => {
        addCommedy(data4.results);
    })

    $.ajax({
        url: `https://api.themoviedb.org/3/discover/movie?with_genres=14`,
        method: 'GET',
        data: {
            api_key: '816e0fc330a4273d11644113cce78339',
            lenguage: 'it-IT'
        }
    }
    ).done((data5) => {
        addFantasy(data5.results);
    })

    $.ajax({
        url: `https://api.themoviedb.org/3/discover/movie?with_genres=27`,
        method: 'GET',
        data: {
            api_key: '816e0fc330a4273d11644113cce78339',
            lenguage: 'it-IT'
        }
    }
    ).done((data6) => {
        addHorror(data6.results);
    })

    $.ajax({
        url: `https://api.themoviedb.org/3/discover/movie?with_genres=10402`,
        method: 'GET',
        data: {
            api_key: '816e0fc330a4273d11644113cce78339',
            lenguage: 'it-IT'
        }
    }
    ).done((data7) => {
        addMusical(data7.results);
    })

    $.ajax({
        url: `https://api.themoviedb.org/3/discover/movie?with_genres=37`,
        method: 'GET',
        data: {
            api_key: '816e0fc330a4273d11644113cce78339',
            lenguage: 'it-IT'
        }
    }
    ).done((data8) => {
        addWestern(data8.results);
    })
}

function addFamily(moviesFamily){

    var mainFamily = document.querySelector('.family');
    mainFamily.innerHTML = '';

    moviesFamily.forEach(movieFamily => {   
        mainFamily.innerHTML += `
            <div class="swiper-slide slide-card pl-4">
                <a href="movie.html?movie_id=${movieFamily.id}">
                    <div class="base-film" style="position: relative; border-radius: 10px; height: 151px; width: 101px; background-size:cover; background-image: url('https://image.tmdb.org/t/p/w300_and_h450_bestv2${movieFamily.poster_path}');"></div>
                    <h4>${movieFamily.title}</h4>
                    <small>${movieFamily.vote_average}/10</small>
                </a>
            </div>
        `
    });
}

function addAdventure(moviesAdventure){

    var mainAdventure = document.querySelector('.adventure');
    mainAdventure.innerHTML = '';

    moviesAdventure.forEach(movieAdventure => {   
        mainAdventure.innerHTML += `
            <div class="swiper-slide slide-card pl-4">
                <a href="movie.html?movie_id=${movieAdventure.id}">
                    <div class="base-film" style="position: relative; border-radius: 10px; height: 151px; width: 101px; background-size:cover; background-image: url('https://image.tmdb.org/t/p/w300_and_h450_bestv2${movieAdventure.poster_path}');"></div>
                    <h4>${movieAdventure.title}</h4>
                    <small>${movieAdventure.vote_average}/10</small>
                </a>
            </div>
        `
    });
}

function addWar(moviesWar){

    var mainWar = document.querySelector('.War');
    mainWar.innerHTML = '';

    moviesWar.forEach(movieWar => {   
        mainWar.innerHTML += `
            <div class="swiper-slide slide-card pl-4">
                <a href="movie.html?movie_id=${movieWar.id}">
                    <div class="base-film" style="position: relative; border-radius: 10px; height: 151px; width: 101px; background-size:cover; background-image: url('https://image.tmdb.org/t/p/w300_and_h450_bestv2${movieWar.poster_path}');"></div>
                    <h4>${movieWar.title}</h4>
                    <small>${movieWar.vote_average}/10</small>
                </a>
            </div>
        `
    });
}

function addCommedy(moviesCommedy){

    var mainCommedy = document.querySelector('.Commedy');
    mainCommedy.innerHTML = '';

    moviesCommedy.forEach(movieCommedy => {   
        mainCommedy.innerHTML += `
            <div class="swiper-slide slide-card pl-4">
                <a href="movie.html?movie_id=${movieCommedy.id}">
                    <div class="base-film" style="position: relative; border-radius: 10px; height: 151px; width: 101px; background-size:cover; background-image: url('https://image.tmdb.org/t/p/w300_and_h450_bestv2${movieCommedy.poster_path}');"></div>
                    <h4>${movieCommedy.title}</h4>
                    <small>${movieCommedy.vote_average}/10</small>
                </a>
            </div>
        `
    });
}


function addFantasy(moviesFantasy){

    var mainFantasy = document.querySelector('.Fantasy');
    mainFantasy.innerHTML = '';

    moviesFantasy.forEach(movieFantasy => {   
        mainFantasy.innerHTML += `
            <div class="swiper-slide slide-card pl-4">
                <a href="movie.html?movie_id=${movieFantasy.id}">
                    <div class="base-film" style="position: relative; border-radius: 10px; height: 151px; width: 101px; background-size:cover; background-image: url('https://image.tmdb.org/t/p/w300_and_h450_bestv2${movieFantasy.poster_path}');"></div>
                    <h4>${movieFantasy.title}</h4>
                    <small>${movieFantasy.vote_average}/10</small>
                </a>
            </div>
        `
    });
}

function addHorror(moviesHorror){

    var mainHorror = document.querySelector('.Horror');
    mainHorror.innerHTML = '';

    moviesHorror.forEach(movieHorror => {   
        mainHorror.innerHTML += `
            <div class="swiper-slide slide-card pl-4">
                <a href="movie.html?movie_id=${movieHorror.id}">
                    <div class="base-film" style="position: relative; border-radius: 10px; height: 151px; width: 101px; background-size:cover; background-image: url('https://image.tmdb.org/t/p/w300_and_h450_bestv2${movieHorror.poster_path}');"></div>
                    <h4>${movieHorror.title}</h4>
                    <small>${movieHorror.vote_average}/10</small>
                </a>
            </div>
        `
    });
}

function addMusical(moviesMusical){

    var mainMusical = document.querySelector('.Musical');
    mainMusical.innerHTML = '';

    moviesMusical.forEach(movieMusical => {   
        mainMusical.innerHTML += `
            <div class="swiper-slide slide-card pl-4">
                <a href="movie.html?movie_id=${movieMusical.id}">
                    <div class="base-film" style="position: relative; border-radius: 10px; height: 151px; width: 101px; background-size:cover; background-image: url('https://image.tmdb.org/t/p/w300_and_h450_bestv2${movieMusical.poster_path}');"></div>
                    <h4>${movieMusical.title}</h4>
                    <small>${movieMusical.vote_average}/10</small>
                </a>
            </div>
        `
    });
}

function addWestern(moviesWestern){

    var mainWestern = document.querySelector('.Western');
    mainWestern.innerHTML = '';

    moviesWestern.forEach(movieWestern => {   
        mainWestern.innerHTML += `
            <div class="swiper-slide slide-card pl-4">
                <a href="movie.html?movie_id=${movieWestern.id}">
                    <div class="base-film" style="position: relative; border-radius: 10px; height: 151px; width: 101px; background-size:cover; background-image: url('https://image.tmdb.org/t/p/w300_and_h450_bestv2${movieWestern.poster_path}');"></div>
                    <h4>${movieWestern.title}</h4>
                    <small>${movieWestern.vote_average}/10</small>
                </a>
            </div>
        `
    });
}

getMovie()