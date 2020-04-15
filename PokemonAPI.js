function initializeMap() {
    var humber = {lat: 43.7291338, lng: -79.6087013};
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 14, center: humber});
    var marker = new google.maps.Marker({position: humber, map: map});
}
function kantoMap() {
    var kanto = {lat: 36.4599, lng: 139.6911};
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 10, center: kanto});
    var marker = new google.maps.Marker({position: kanto, map: map});
}
function johtoMap() {
    var johto = {lat: 34.6413,lng: 135.5629};
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 10, center: johto});
    var marker = new google.maps.Marker({position: johto, map: map});
}
function hoennMap() {
    var hoenn = {lat: 32.5900, lng: 130.8000};
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 10, center: hoenn});
    var marker = new google.maps.Marker({position: hoenn, map: map});
}
function sinnohMap() {
    var sinnoh = {lat: 43.2203, lng: 142.8635};
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 10, center: sinnoh});
    var marker = new google.maps.Marker({position: sinnoh, map: map});
}
function unovaMap() {
    var unova = {lat: 40.7831, lng: -73.9712};
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 10, center: unova});
    var marker = new google.maps.Marker({position: unova, map: map});
}
function kalosMap() {
    var kalos = {lat: 48.8566, lng: 2.3522};
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 10, center: kalos});
    var marker = new google.maps.Marker({position: kalos, map: map});
}
function alolaMap() {
    var alola = {lat: 19.8968, lng: -155.5828};
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 10, center: alola});
    var marker = new google.maps.Marker({position: alola, map: map});
}
function galarMap() {
    var galar = {lat: 53.4808, lng: 1.2426};
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 10, center: galar});
    var marker = new google.maps.Marker({position: galar, map: map});
}

$('form').on('submit', function(e){
    var pokemon = document.getElementById("pokemon");
    var desc = document.getElementById("desc");
    var pokepic = document.getElementById("pokepic");
    e.preventDefault();

    var types = $('input[type=number]').val().replace(' ','');
    types=types.split(',');
    console.log(types);
//loads the pokemon API when the form is submitted
    var trainerTypes = types.map(function(type){
        return $.ajax({
            url: 'http://pokeapi.co/api/v2/pokemon/' + type,
            dataType:'json',
            method: 'GET'
        });
    });
    $.when.apply(null, trainerTypes)
        .then(function(){
            var pokemonTypes = Array.prototype.slice.call(arguments);
            pokemonTypes = pokemonTypes.map(function(types){
            return types.name;
        });
        pokemon.innerHTML = pokemonTypes[0].charAt(0).toUpperCase() + pokemonTypes[0].substring(1);
        pokepic.setAttribute("src", "sprites/"+types+".png");
    });

    if(types[0] <= 151){
        //console.log(types[0]);
        desc.innerHTML="! A pokemon from the Kanto Region, which is based on Kanto, Japan";
        kantoMap();
    }else if(types[0]>151 && types[0]<=251){
        //console.log(types[0]);
        desc.innerHTML="! A pokemon from the Johto Region, which is based on Osaka, Japan";
        johtoMap();
    }else if(types[0]>251 && types[0]<=386){
        //console.log(types[0]);
        desc.innerHTML="! A pokemon from the Hoenn Region, which is based on Kumamoto, Japan";
        hoennMap();
    }else if(types[0]>386 && types[0]<=493){
        //console.log(types[0]);
        desc.innerHTML="! A pokemon from the Sinnoh Region, which is based on Hokkaido, Japan";
        sinnohMap();
    }else if(types[0]>493 && types[0]<=649){
        //console.log(types[0]);
        desc.innerHTML="! A pokemon from the Unova Region, which is based on New York, USA";
        unovaMap();
    }else if(types[0]>649 && types[0]<=721){
        //console.log(types[0]);
        desc.innerHTML="! A pokemon from the Kalos Region, which is based on Paris, France";
        kalosMap();
    }else if(types[0]>721 && types[0]<=807){
        //console.log(types[0]);
        desc.innerHTML="! A pokemon from the Alola Region, which is based on Hawaii, USA";
        alolaMap();
    }else{
        //console.log(types[0]);
        initializeMap();
        pokemon.innerHTML = "That's not a valid pokemon Number";
        desc.innerHTML="";
        pokepic.setAttribute("src", "sprites/0.png");
    }

});

// function getName(pokemonTypes){
//     pokemonTypes = pokemonTypes.map(function(types){
//         return types.name;
//     });
//     console.log(pokemonTypes);

