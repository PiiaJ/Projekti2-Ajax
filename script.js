document.getElementById('nappi').addEventListener('click', getData());

function getData() {
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
        var writers = data.getElementsByTagName('dc:creator');


        // taulukot käydään läpi
        for (var i=2; i < titles.length; i++){
            var testi = '<a href=' + links[i].innerHTML + '>' + titles[i].innerHTML + '</a>' 
            console.log(testi);
            document.write('<strong>'+testi+'</strong> ('+writers[i].innerHTML+')<br>');
        }
    }
}
}
