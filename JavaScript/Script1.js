
function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['serie'];
    header.appendChild(myH1);

    var myPara = document.createElement('p');
    myPara.textContent = 'Personaje: ' + jsonObj['personaje'];
    header.appendChild(myPara);
}
function goku(jsonObj) {
    var transformaciones = jsonObj['transformaciones'];

    for (var i = 0; i < transformaciones.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myImg = document.createElement('img');
        var myList = document.createElement('ul');

        myH2.textContent = transformaciones[i].nombre;
        myPara1.textContent = 'Descripcion: ' + transformaciones[i].descripcion;
        
        myImg.src = transformaciones[i].img;
        
        myImg.height = "500"
        var superPowers = transformaciones[i].img;
        for (var j = 0; j < transformaciones.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = transformaciones[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myImg);

        section.appendChild(myArticle);
    }
}
var requestURL = 'Json/json.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var json = request.response;
    populateHeader(json);
    goku(json);
}
