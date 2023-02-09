let url = `https://amiiboapi.com/api/amiibo/`;
// console.log(url);

let searchBar = document.querySelector('input');
let button = document.querySelector('#button');

let image = document.querySelector('.image');
let amiiboSeries = document.querySelector('.amiiboSeries')
let character = document.querySelector('.character');
let gameSeries = document.querySelector('.gameSeries');
let Name = document.querySelector('.name');
let release = document.querySelector('.release');
const container = document.getElementById('container')

// Récupérer des infos de l'API
    
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                    console.log(data);
                    // console.log(data["amiibo"][0]["image"]);
                    // console.log(data["amiibo"][0]["amiiboSeries"]);
                    // console.log(data["amiibo"][0]["character"]);
                    // console.log(data["amiibo"][0]["gameSeries"]);
                    // console.log(data["amiibo"][0]["name"]);
                    // console.log(data["amiibo"][0]["release"].eu);

                    console.log(data["amiibo"].length);

                    // Dès qu'on clique sur le boutton, la fonction searchAmiibo sera appelée
                    button.addEventListener("click",searchAmiibo)

                    // affichera les 20 premiers éléments Amiibo dès l'ouverture ou le chargement de l'appli
                    for (i = 0; i < 20; i++) {

                        //console.log(data["amiibo"][i]["name"]);
                        
                    let affichageImage = data["amiibo"][i]["image"];
                    let affichageAmiiboSeries = data["amiibo"][i]["amiiboSeries"];
                    let affichageCharacter = data["amiibo"][i]["character"];
                    let affichageGameSeries = data["amiibo"][i]["gameSeries"];
                    let affichageName = data["amiibo"][i]["name"];
                    let affichageRelease = data["amiibo"][i]["release"].eu;

                    // console.log(affichageImage)

                    container.innerHTML += 
                    '<div>' +
                        '<img src="'+ affichageImage +'" alt="figurine amiibo" class="image">' +
                        '<div class="infos">' +
                            '<p><span class="pink">AmiiboSeries : </span><br>'+ affichageAmiiboSeries +'<span class="amiiboSeries"></span></p>' +
                            '<p><span class="pink">Character : </span><br>'+ affichageCharacter +'<span class="character"></span></p>' +
                            '<p><span class="pink">GameSeries : </span><br>'+ affichageGameSeries +'<span class="gameSeries"></span></p>' +
                            '<p><span class="pink">Name : </span><br>'+ affichageName +'<span class="name"></span></p>' +
                            '<p><span class="pink">European Release : </span><br>'+ affichageRelease +'<span class="release"></span></p>' +
                        '</div>' +
                    '</div>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>'
                    }
                    // image.src = affichageImage;
                    // amiiboSeries.innerHTML = affichageAmiiboSeries;
                    // character.innerHTML = affichageCharacter;
                    // gameSeries.innerHTML = affichageGameSeries;
                    // Name.innerHTML = affichageName;
                    // release.innerHTML = affichageRelease;

                    // On crée une fonction searchAmiibo pour rechercher un ou plusieurs Amiibo
                    function searchAmiibo(){
                        if(container.innerHTML.length > 1) {
                            container.innerHTML = ''
                        }
                        for(i = 0; i < data['amiibo'].length; i++) {
                            let amibooToLowerCase = data['amiibo'][i].character.toLowerCase()
                            if(amibooToLowerCase.includes(searchBar.value.toLowerCase())) {
                                console.log(data['amiibo'][i])


                                let affichageImage = data["amiibo"][i]["image"];
                                let affichageAmiiboSeries = data["amiibo"][i]["amiiboSeries"];
                                let affichageCharacter = data["amiibo"][i]["character"];
                                let affichageGameSeries = data["amiibo"][i]["gameSeries"];
                                let affichageName = data["amiibo"][i]["name"];
                                let affichageRelease = data["amiibo"][i]["release"].eu;
            
                                console.log(affichageImage);
            
                                container.innerHTML += 
                                '<div>' +
                                    '<img src="'+ affichageImage +'" alt="figurine amiibo" class="image">' +
                                    '<div class="infos">' +
                                        '<p><span class="pink">AmiiboSeries : </span><br>' + affichageAmiiboSeries + '<span class="amiiboSeries"></span></p>' +
                                        '<p><span class="pink">Character : </span><br>' + affichageCharacter + '<span class="character"></span></p>' +
                                        '<p><span class="pink">GameSeries : </span><br>' + affichageGameSeries + '<span class="gameSeries"></span></p>' +
                                        '<p><span class="pink">Name : </span><br>' + affichageName + '<span class="name"></span></p>' +
                                        '<p><span class="pink">European Release : </span><br>' + affichageRelease + '<span class="release"></span></p>' +
                                    '</div>' +
                                '</div>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>'
                            }
                        }
                    }
                })
    

