document.getElementById('bottone').addEventListener('click', getAllData);
document.getElementById('Cronache').addEventListener('click', getColumns);


function getAllData() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","http://xml2.corriereobjects.it/rss/homepage.xml",true);
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
    xmlhttp.open("GET","http://xml2.corriereobjects.it/rss/homepage.xml",true);
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
            addToList('Cronache');

            
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


// lapsien poistaminen, lista tyhjenee
function emptyList(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


