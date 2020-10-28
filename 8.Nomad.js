import Bacon from 'baconjs'

//===============================================
//=========== Simple example of Stream using Bacon Js
//===============================================

const stream = new Bacon.Bus()

// stream
//     .map( word => word.toUpperCase())
//     .onValue( word => console.log(word))

stream.push('cat');
stream.push('meal');
stream.push('trumpet');


//===============================================
//=========== Nomad Example
//===============================================
// THis version does not work actually, we can use cload api instead 
// I am lazy now lol, we can illustrate things without create new key :p 

function getInPortuguese(word){
    const apiKey =
        'AIzaSyB4DyRHIsNhogQXmH16YKbZfR-lTXrQpq0'
    const url = 
        'https://www.googleapis.com' +
        '/language/treanslate/v2' + 
        '?key=' + apiKey +
        '&source=en'+
        '&target=pt'+
        '&q=' + encodeURIComponent(word)
    const promise = fetch(url)
        .then(response => response.json())
        .then(parsedResponse => 
            parsedResponse
                .data
                .translations[0]
                .translatedText
            )
    const stream = Bacon.fromPromise(promise)
    return stream
}

stream  
    .flatmap(word => getInPortuguese(word))
    .map(word => word.toUpperCase())
    .onValue(word => console.log(word))