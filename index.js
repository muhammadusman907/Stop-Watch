let min = 0;
let sec = 0 ;
let milliSec = 0 ;
let interval = false ;

let milliSecond =  document.getElementById("milli-sec");
let second =  document.getElementById("second");
let minute =  document.getElementById("minute");

function start (){
    
    interval = true ;
}
function stop (){
    interval = false ;
//    clearInterval(timer)
}
function reset (){

     min ="0";
     sec ="0" ;
     milliSec = "0" ;
    milliSecond.innerText = min; 
    second.innerText = sec;
    minute.innerText = milliSec ;
    stop()
    
}
 let timer = setInterval (function (){
 
    if(interval === true) {
          
   
     milliSecond.innerText = milliSec++ ; 
    
    if(milliSec > 100 ){
        milliSec = "0";
        minute.innerText = sec++ ;
    }
     if (milliSec < 10) {
        milliSecond.innerText = "0"  + milliSec;
    }

    if( sec > 60){
        sec = "0";
        second.innerText = min++ ;
    }
    if (sec < 10) {
        minute.innerText = "0"  +  sec;
    }
        if (min < 10) {
        second.innerText = "0"  +  min;
    }
 }
}
,10)