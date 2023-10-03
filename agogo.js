let date = document.querySelector(".date");
let jour = new Date()

let dateLocale = jour.toLocaleString('fr-FR',{
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'});

let vingtSeconde = document.querySelector(".secs");
let cappucino = document.querySelector(".CAPPUCINO");
let the = document.querySelector(".THE-15");
let petit = document.querySelector(".PETIT-DEJEUNER");
let DEJ = document.querySelector(".DEJEUNER");

function firstZero(int){
    if(int <= 9 && int >= 0) {
        return '0' + int;

    } else{
        return int;
    }
}

let ser = document.querySelector(".affiche");
let enfant = document.querySelector(".Affiche")

let timeout, seg = 59;
// function chronos (minute){
//     let cron;
//     if ( min == minute) {

//         min = min - 1;

//     }

//     if ( min == 0 && seg == 0) {

//         clearTimeout(timeout);
//         enfant.innerHTML = '';

//     } else {

//         cron = '00:' + firstZero(min) + ':' + firstZero(seg);
//         enfant.innerHTML =  cron  ;
//         seg = seg -  1;

//             if( seg == 0 && min > 0){
//                 min = min - 1;
//                 seg = 59;
//             }

//         timeout = setTimeout(chronos, 1000);
//     }
// }

function chronos(minutes) {
    let cron;
    let hours = Math.floor(minutes / 60); 
    minutes = minutes % 60; 

    if (minutes === 0 && hours === 0 && seg === 0) {
        clearTimeout(timeout);
        enfant.innerHTML = '';
    } else {
        cron = `${firstZero(hours)}:${firstZero(minutes)}:${firstZero(seg)}`;
        enfant.innerHTML = cron;
        seg--;

        if (seg < 0) {
            if (minutes > 0) {
                minutes --;
                seg = 59;
            } else if (hours > 0) {
                hours--;
                minutes = 59;
                seg = 59;
            }
        }

        timeout = setTimeout(() => chronos(hours * 60 + minutes), 1000);
    }
}


function iniciar(minute){
    min = minute;
    clearTimeout(timeout);
    after (minute)
    chronos(minute);
}



function after (minute) {
  let durer = minute * 60 * 1000;
  let back =  new Date (jour.getTime() + durer + seg)
  retour = back.toLocaleTimeString('fr-FR',{
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'});;

date.textContent = "Be Black at " + retour ;
}

 cappucino.addEventListener('click', function (){
    seg = 00;
    iniciar(5)
    date.textContent = "Be Black at " + retour ;
 });
 the.addEventListener('click', function (){
    seg = 00;
    iniciar(15);
    date.textContent = "Be Black at " + retour ;
 });
 petit.addEventListener('click', function (){
    seg = 00;
    iniciar(20);
    date.textContent = "Be Black at " + retour ;
 });
 DEJ.addEventListener('click', function (){
    seg = 00;
    iniciar(30);
    date.textContent = "Be Black at " + retour ;
 });

 vingtSeconde.addEventListener('click' , function () {

    seg = 20;
    min = 0;
    hours = 0;
    clearTimeout(timeout);
    timeout = setTimeout(chronos, 1000, min);
    date.textContent = "Be Black at " + retour;
 });

let input = document.querySelector("input");

input.addEventListener("keydown" , function (event){


    if (event.key === 'Enter') {
        const valeur = parseFloat(input.value);
          minute = valeur;
      }
     seg = 0
      iniciar(minute)
   
})