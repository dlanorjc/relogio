
function relogio(){
    let date = new Date;
     let horas = date.getHours();
     let minutos = date.getMinutes();
     let segundos = date.getSeconds();


     if(horas < 10)
        horas = "0" + horas;
    if(minutos < 10)
        minutos = "0" + minutos;
    if(segundos < 10)
        segundos = "0" + segundos;


    document.querySelector('div#relogio').innerHTML = horas + ":" + minutos + ":" + segundos;
    document.querySelector('title').innerHTML = horas + ":" + minutos + ":" + segundos;

}
window.setInterval("relogio()", 1000);