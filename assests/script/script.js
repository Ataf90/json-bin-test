console.log("chargé mon JS ");

//------------------- crée mon JSONBIN------------------//


let req = new XMLHttpRequest();

req.onreadystatechange = ()=>{
    if(req.readyState === XMLHttpRequest.DONE){
        console.log(req.responseText);
    }
};

req.open("POST","https://api.jsonbin.io/v3/b",true)
req.setRequestHeader("content-type","application/json");
req.setRequestHeader("X-Master-Key","$2a$10$9Q9BgWTlVTxMMctt8ReIQO4ODlo8OgxJgWA3/fxqQMoRyXsUJsN9O");
req.send('{"sample": "Hello World"}')
