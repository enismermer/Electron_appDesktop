let url = `https://amiiboapi.com/api/amiibo/`;
// console.log(url);

let input = document.querySelector('input');
let button = document.querySelector('button');

let image = document.querySelector('.image');
let amiiboSeries = document.querySelector('.character');
let gameSeries = document.querySelector('.gameSeries');
let name = document.querySelector('.name');
let release = document.querySelector('.release');

let reponse = '';


// Récupérer des infos de l'API
    fetch(url)
        .then(response => response.json())
            .then((data) => {
                    response.innerHTML += image[0].image;
            })

