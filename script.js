document.getElementById('bottone').addEventListener('click', getAllData);
document.getElementById('Cronache').addEventListener('click', getColumns);
document.getElementById('Politica').addEventListener('click', getPolitics);
document.getElementById('Corriere').addEventListener('click', getOther);
document.getElementById('Sport').addEventListener('click', getSport);
document.getElementById('Editoriali').addEventListener('click', getEditorials);
document.getElementById('Spettacoli').addEventListener('click', getEntertainment);
document.getElementById('Esteri').addEventListener('click', getForeign);
document.getElementById('Economia').addEventListener('click', getEconomics);
document.getElementById('Cultura').addEventListener('click', getCulture);
document.getElementById('CorriereTV').addEventListener('click', getCinemaTV);
document.getElementById('Technologia').addEventListener('click', getTech);
document.getElementById('Sport').addEventListener('click', getSport);
document.getElementById('Motori').addEventListener('click', getMotors);
document.getElementById('Moda').addEventListener('click', getFashion);
document.getElementById('Animali').addEventListener('click', getAnimals);
document.getElementById('Salute').addEventListener('click', getHealth);


function getAllData() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://xml2.corriereobjects.it/rss/homepage.xml",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            console.log ( xmlhttp.responseText);
        
            // tallennetaan xml muuttujaan
            var data = xmlhttp.responseXML;

            // tallennetaan title-, creator- ja link-tägit
            var titles = data.getElementsByTagName('title');
            var links = data.getElementsByTagName('link');
            var published = data.getElementsByTagName('pubDate');

            // tarkistetaan, onko uutisotsikkolista tyhjä, jos ei, tyhjennetään
            var listing = document.getElementById('showList');

            emptyList(listing);

            // taulukot käydään läpi, titlet alkavat indeksistä 2, julkaisuajat indeksistä 0
            for (var i=2; i < titles.length; i++){
                var titleWithLink = '<a href=' + links[i].innerHTML + '>' + titles[i].innerHTML + '</a>';

                listing.innerHTML += '<li><strong>' + titleWithLink + '</strong> (' + published[i-2].innerHTML + ')</li>';
            }
        }
    }
}

function getColumns() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://xml2.corriereobjects.it/rss/homepage.xml",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            console.log ( xmlhttp.responseText);
        
            // tallennetaan xml muuttujaan
            var data = xmlhttp.responseXML;

            // tallennetaan title- ja link-tägit data-muuttujasta
            var titles = data.getElementsByTagName('title');
            var links = data.getElementsByTagName('link');
            var categories = data.getElementsByTagName('category');

            // tarkistetaan, onko uutisotsikkolista tyhjä, jos ei, tyhjennetään
            var listing = document.getElementById('showList');
             
            // lista tyhjennetään
            emptyList(listing);

            // taulukot käydään läpi, titlet ja listit alkavat indeksistä 2, kategoriat indeksistä 0
            for (var i=2; i < titles.length; i++){
                if(categories[i-2].innerHTML == 'Cronache') {
                    var titleWithLink = '<a href=' + links[i].innerHTML + '>' + titles[i].innerHTML + '</a>';
                    listing.innerHTML += '<li>' + titleWithLink + '</li>';
                }
            }
        }
    }
}

function getHealth() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://xml2.corriereobjects.it/rss/homepage.xml",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            console.log ( xmlhttp.responseText);
        
            // tallennetaan xml muuttujaan
            var data = xmlhttp.responseXML;

            // tallennetaan title- ja link-tägit data-muuttujasta
            var titles = data.getElementsByTagName('title');
            var links = data.getElementsByTagName('link');
            var categories = data.getElementsByTagName('category');

            // tarkistetaan, onko uutisotsikkolista tyhjä, jos ei, tyhjennetään
            var listing = document.getElementById('showList');
             
            // lista tyhjennetään
            emptyList(listing);

            // taulukot käydään läpi, titlet ja listit alkavat indeksistä 2, kategoriat indeksistä 0
            for (var i=2; i < titles.length; i++){
                if(categories[i-2].innerHTML == 'Salute') {
                    var titleWithLink = '<a href=' + links[i].innerHTML + '>' + titles[i].innerHTML + '</a>';
                    listing.innerHTML += '<li>' + titleWithLink + '</li>';
                }
            }
        }
    }
}

function getPolitics() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://xml2.corriereobjects.it/rss/homepage.xml",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            console.log ( xmlhttp.responseText);
        
            // tallennetaan xml muuttujaan
            var data = xmlhttp.responseXML;

            // tallennetaan title- ja link-tägit data-muuttujasta
            var titles = data.getElementsByTagName('title');
            var links = data.getElementsByTagName('link');
            var categories = data.getElementsByTagName('category');

            // tarkistetaan, onko uutisotsikkolista tyhjä, jos ei, tyhjennetään
            var listing = document.getElementById('showList');
             
            // lista tyhjennetään
            emptyList(listing);
            
            // taulukot käydään läpi, titlet ja listit alkavat indeksistä 2, kategoriat indeksistä 0
            for (var i=2; i < titles.length; i++){
                if(categories[i-2].innerHTML == 'Politica') {
                    var titleWithLink = '<a href=' + links[i].innerHTML + '>' + titles[i].innerHTML + '</a>';
                    listing.innerHTML += '<li>' + titleWithLink + '</li>';
                }
            }
        }
    }
}

function getOther() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://xml2.corriereobjects.it/rss/homepage.xml",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            console.log ( xmlhttp.responseText);
        
            // tallennetaan xml muuttujaan
            var data = xmlhttp.responseXML;

            // tallennetaan title- ja link-tägit data-muuttujasta
            var titles = data.getElementsByTagName('title');
            var links = data.getElementsByTagName('link');
            var categories = data.getElementsByTagName('category');

            // tarkistetaan, onko uutisotsikkolista tyhjä, jos ei, tyhjennetään
            var listing = document.getElementById('showList');
             
            // lista tyhjennetään
            emptyList(listing);

            // taulukot käydään läpi, titlet ja listit alkavat indeksistä 2, kategoriat indeksistä 0
            for (var i=2; i < titles.length; i++){
                if(categories[i-2].innerHTML == 'Corriere') {
                    var titleWithLink = '<a href=' + links[i].innerHTML + '>' + titles[i].innerHTML + '</a>';
                    listing.innerHTML += '<li>' + titleWithLink + '</li>';
                }
            }
        }
    }
}
function getSport() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://xml2.corriereobjects.it/rss/homepage.xml",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            console.log ( xmlhttp.responseText);
        
            // tallennetaan xml muuttujaan
            var data = xmlhttp.responseXML;

            // tallennetaan title- ja link-tägit data-muuttujasta
            var titles = data.getElementsByTagName('title');
            var links = data.getElementsByTagName('link');
            var categories = data.getElementsByTagName('category');

            // tarkistetaan, onko uutisotsikkolista tyhjä, jos ei, tyhjennetään
            var listing = document.getElementById('showList');
             
            // lista tyhjennetään
            emptyList(listing);

            // taulukot käydään läpi, titlet ja listit alkavat indeksistä 2, kategoriat indeksistä 0
            for (var i=2; i < titles.length; i++){
                if(categories[i-2].innerHTML == 'Sport') {
                    var titleWithLink = '<a href=' + links[i].innerHTML + '>' + titles[i].innerHTML + '</a>';
                    listing.innerHTML += '<li>' + titleWithLink + '</li>';
                }
            }
        }
    }
}

function getEditorials() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://xml2.corriereobjects.it/rss/homepage.xml",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            console.log ( xmlhttp.responseText);
        
            // tallennetaan xml muuttujaan
            var data = xmlhttp.responseXML;

            // tallennetaan title- ja link-tägit data-muuttujasta
            var titles = data.getElementsByTagName('title');
            var links = data.getElementsByTagName('link');
            var categories = data.getElementsByTagName('category');

            // tarkistetaan, onko uutisotsikkolista tyhjä, jos ei, tyhjennetään
            var listing = document.getElementById('showList');
             
            // lista tyhjennetään
            emptyList(listing);

            // taulukot käydään läpi, titlet ja listit alkavat indeksistä 2, kategoriat indeksistä 0
            for (var i=2; i < titles.length; i++){
                if(categories[i-2].innerHTML == 'Editoriali') {
                    var titleWithLink = '<a href=' + links[i].innerHTML + '>' + titles[i].innerHTML + '</a>';
                    listing.innerHTML += '<li>' + titleWithLink + '</li>';
                }
            }
        }
    }
}

function getAnimals() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://xml2.corriereobjects.it/rss/homepage.xml",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            console.log ( xmlhttp.responseText);
        
            // tallennetaan xml muuttujaan
            var data = xmlhttp.responseXML;

            // tallennetaan title- ja link-tägit data-muuttujasta
            var titles = data.getElementsByTagName('title');
            var links = data.getElementsByTagName('link');
            var categories = data.getElementsByTagName('category');

            // tarkistetaan, onko uutisotsikkolista tyhjä, jos ei, tyhjennetään
            var listing = document.getElementById('showList');
             
            // lista tyhjennetään
            emptyList(listing);

            // taulukot käydään läpi, titlet ja listit alkavat indeksistä 2, kategoriat indeksistä 0
            for (var i=2; i < titles.length; i++){
                if(categories[i-2].innerHTML == 'Animali') {
                    var titleWithLink = '<a href=' + links[i].innerHTML + '>' + titles[i].innerHTML + '</a>';
                    listing.innerHTML += '<li>' + titleWithLink + '</li>';
                }
            }
        }
    }
}

function getCinemaTV() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://xml2.corriereobjects.it/rss/homepage.xml",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            console.log ( xmlhttp.responseText);
        
            // tallennetaan xml muuttujaan
            var data = xmlhttp.responseXML;

            // tallennetaan title- ja link-tägit data-muuttujasta
            var titles = data.getElementsByTagName('title');
            var links = data.getElementsByTagName('link');
            var categories = data.getElementsByTagName('category');

            // tarkistetaan, onko uutisotsikkolista tyhjä, jos ei, tyhjennetään
            var listing = document.getElementById('showList');
             
            // lista tyhjennetään
            emptyList(listing);

            // taulukot käydään läpi, titlet ja listit alkavat indeksistä 2, kategoriat indeksistä 0
            for (var i=2; i < titles.length; i++){
                if(categories[i-2].innerHTML == 'CorriereTV') {
                    var titleWithLink = '<a href=' + links[i].innerHTML + '>' + titles[i].innerHTML + '</a>';
                    listing.innerHTML += '<li>' + titleWithLink + '</li>';
                }
            }
        }
    }
}

function getEconomics() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://xml2.corriereobjects.it/rss/homepage.xml",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            console.log ( xmlhttp.responseText);
        
            // tallennetaan xml muuttujaan
            var data = xmlhttp.responseXML;

            // tallennetaan title- ja link-tägit data-muuttujasta
            var titles = data.getElementsByTagName('title');
            var links = data.getElementsByTagName('link');
            var categories = data.getElementsByTagName('category');

            // tarkistetaan, onko uutisotsikkolista tyhjä, jos ei, tyhjennetään
            var listing = document.getElementById('showList');
             
            // lista tyhjennetään
            emptyList(listing);

            // taulukot käydään läpi, titlet ja listit alkavat indeksistä 2, kategoriat indeksistä 0
            for (var i=2; i < titles.length; i++){
                if(categories[i-2].innerHTML == 'Economia') {
                    var titleWithLink = '<a href=' + links[i].innerHTML + '>' + titles[i].innerHTML + '</a>';
                    listing.innerHTML += '<li>' + titleWithLink + '</li>';
                }
            }
        }
    }
}

function getEntertainment() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://xml2.corriereobjects.it/rss/homepage.xml",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            console.log ( xmlhttp.responseText);
        
            // tallennetaan xml muuttujaan
            var data = xmlhttp.responseXML;

            // tallennetaan title- ja link-tägit data-muuttujasta
            var titles = data.getElementsByTagName('title');
            var links = data.getElementsByTagName('link');
            var categories = data.getElementsByTagName('category');

            // tarkistetaan, onko uutisotsikkolista tyhjä, jos ei, tyhjennetään
            var listing = document.getElementById('showList');
             
            // lista tyhjennetään
            emptyList(listing);

            // taulukot käydään läpi, titlet ja listit alkavat indeksistä 2, kategoriat indeksistä 0
            for (var i=2; i < titles.length; i++){
                if(categories[i-2].innerHTML == 'Spettacoli') {
                    var titleWithLink = '<a href=' + links[i].innerHTML + '>' + titles[i].innerHTML + '</a>';
                    listing.innerHTML += '<li>' + titleWithLink + '</li>';
                }
            }
        }
    }
}

function getForeign() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://xml2.corriereobjects.it/rss/homepage.xml",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            console.log ( xmlhttp.responseText);
        
            // tallennetaan xml muuttujaan
            var data = xmlhttp.responseXML;

            // tallennetaan title- ja link-tägit data-muuttujasta
            var titles = data.getElementsByTagName('title');
            var links = data.getElementsByTagName('link');
            var categories = data.getElementsByTagName('category');

            // tarkistetaan, onko uutisotsikkolista tyhjä, jos ei, tyhjennetään
            var listing = document.getElementById('showList');
             
            // lista tyhjennetään
            emptyList(listing);

            // taulukot käydään läpi, titlet ja listit alkavat indeksistä 2, kategoriat indeksistä 0
            for (var i=2; i < titles.length; i++){
                if(categories[i-2].innerHTML == 'Esteri') {
                    var titleWithLink = '<a href=' + links[i].innerHTML + '>' + titles[i].innerHTML + '</a>';
                    listing.innerHTML += '<li>' + titleWithLink + '</li>';
                }
            }
        }
    }
}

function getCulture() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://xml2.corriereobjects.it/rss/homepage.xml",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            console.log ( xmlhttp.responseText);
        
            // tallennetaan xml muuttujaan
            var data = xmlhttp.responseXML;

            // tallennetaan title- ja link-tägit data-muuttujasta
            var titles = data.getElementsByTagName('title');
            var links = data.getElementsByTagName('link');
            var categories = data.getElementsByTagName('category');

            // tarkistetaan, onko uutisotsikkolista tyhjä, jos ei, tyhjennetään
            var listing = document.getElementById('showList');
             
            // lista tyhjennetään
            emptyList(listing);

            // taulukot käydään läpi, titlet ja listit alkavat indeksistä 2, kategoriat indeksistä 0
            for (var i=2; i < titles.length; i++){
                if(categories[i-2].innerHTML == 'Cultura') {
                    var titleWithLink = '<a href=' + links[i].innerHTML + '>' + titles[i].innerHTML + '</a>';
                    listing.innerHTML += '<li>' + titleWithLink + '</li>';
                }
            }
        }
    }
}

function getMotors() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://xml2.corriereobjects.it/rss/homepage.xml",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            console.log ( xmlhttp.responseText);
        
            // tallennetaan xml muuttujaan
            var data = xmlhttp.responseXML;

            // tallennetaan title- ja link-tägit data-muuttujasta
            var titles = data.getElementsByTagName('title');
            var links = data.getElementsByTagName('link');
            var categories = data.getElementsByTagName('category');

            // tarkistetaan, onko uutisotsikkolista tyhjä, jos ei, tyhjennetään
            var listing = document.getElementById('showList');
             
            // lista tyhjennetään
            emptyList(listing);

            // taulukot käydään läpi, titlet ja listit alkavat indeksistä 2, kategoriat indeksistä 0
            for (var i=2; i < titles.length; i++){
                if(categories[i-2].innerHTML == 'Motori') {
                    var titleWithLink = '<a href=' + links[i].innerHTML + '>' + titles[i].innerHTML + '</a>';
                    listing.innerHTML += '<li>' + titleWithLink + '</li>';
                }
            }
        }
    }
}

function getTech() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://xml2.corriereobjects.it/rss/homepage.xml",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            console.log ( xmlhttp.responseText);
        
            // tallennetaan xml muuttujaan
            var data = xmlhttp.responseXML;

            // tallennetaan title- ja link-tägit data-muuttujasta
            var titles = data.getElementsByTagName('title');
            var links = data.getElementsByTagName('link');
            var categories = data.getElementsByTagName('category');

            // tarkistetaan, onko uutisotsikkolista tyhjä, jos ei, tyhjennetään
            var listing = document.getElementById('showList');
             
            // lista tyhjennetään
            emptyList(listing);

            // taulukot käydään läpi, titlet ja listit alkavat indeksistä 2, kategoriat indeksistä 0
            for (var i=2; i < titles.length; i++){
                if(categories[i-2].innerHTML == 'Tecnologia') {
                    var titleWithLink = '<a href=' + links[i].innerHTML + '>' + titles[i].innerHTML + '</a>';
                    listing.innerHTML += '<li>' + titleWithLink + '</li>';
                }
            }
        }
    }
}

function getFashion() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://xml2.corriereobjects.it/rss/homepage.xml",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            console.log ( xmlhttp.responseText);
        
            // tallennetaan xml muuttujaan
            var data = xmlhttp.responseXML;

            // tallennetaan title- ja link-tägit data-muuttujasta
            var titles = data.getElementsByTagName('title');
            var links = data.getElementsByTagName('link');
            var categories = data.getElementsByTagName('category');

            // tarkistetaan, onko uutisotsikkolista tyhjä, jos ei, tyhjennetään
            var listing = document.getElementById('showList');
             
            // lista tyhjennetään
            emptyList(listing);

            // taulukot käydään läpi, titlet ja listit alkavat indeksistä 2, kategoriat indeksistä 0
            for (var i=2; i < titles.length; i++){
                if(categories[i-2].innerHTML == 'Moda') {
                    var titleWithLink = '<a href=' + links[i].innerHTML + '>' + titles[i].innerHTML + '</a>';
                    listing.innerHTML += '<li>' + titleWithLink + '</li>';
                }
            }
        }
    }
}



// lapsien poistaminen, lista tyhjenee
function emptyList(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/*
function getOther() {
    var data = getAjaxData();
    console.log(data);
}
*/
/*
function getAjaxData() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","http://xml2.corriereobjects.it/rss/homepage.xml",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            // tallennetaan haetut tiedot muuttujaan
            var data = xmlhttp.responseXML;
            return data;
        }
    }
}
*/

