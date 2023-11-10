"use strict";
console.log("script chargé");
// var myInit = {
//             methode:'GET',
//             Headers:{
//                 'Content-type': 'application/json'
//             },
//             mode:'cors',
//             cache:'default'
// };

// console.log("chargé mon JS ");
// let myRequest = new Request("/data.json",myInit);
// fetch(myRequest)
//     .then(function(resp){
//         return resp.json();
//     })
//     .then((function(data){
//         console.log(data.features);
//     }))

//------------------- crée mon JSONBIN------------------//
// let req = new XMLHttpRequest();

// req.onreadystatechange = () => {
//     if (req.readyState === XMLHttpRequest.DONE) {
//         console.log(req.responseText);
//     }
// };

// req.open("POST", "https://api.jsonbin.io/v3/b", true)
// req.setRequestHeader("content-type", "application/json");
// req.setRequestHeader("X-Master-Key", "$2a$10$9Q9BgWTlVTxMMctt8ReIQO4ODlo8OgxJgWA3/fxqQMoRyXsUJsN9O");
// req.send('{"sample": "Hello World"}')





// let myJsObject = {username : "Georges",Age : 33} ;
// let myjsonObject = JSON.stringify(myJsObject);

// console.log(myJsObject);
// console.log(typeof myJsObject);

// console.log(myjsonObject);
// console.log(typeof myjsonObject);
//----------- pour lire mon BIN---------// 
const SECRET_KEY = "$2a$10$9Q9BgWTlVTxMMctt8ReIQO4ODlo8OgxJgWA3/fxqQMoRyXsUJsN9O";
const API_URL = "https://api.jsonbin.io/v3";
const BIN_TO_READ ="654df0dc12a5d37659976fa3";

let binContent;
await getDataFetchBis();
console.log("Voici les données via fetch: ", binContent);

async function getDataFetchBis () {
    const res = await fetch(`${API_URL}/b/${BIN_TO_READ}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            "X-Master-Key": SECRET_KEY,
            
        }
    });
    binContent = await res.json();
}