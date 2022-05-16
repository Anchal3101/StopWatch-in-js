let sec= 0;
let min =0;
let hr = 0;
let timer = false;
let count = 0;




const start=()=>{
   timer=true;
  stopwatch();
}

const stop=()=>{
   timer = false;
   document.getElementById('para').innerHTML= hr +min + sec+ '' +count ;

}

const reset=()=>{
    timer = false;
     sec= 0;
     min =0;
     hr = 0;
     count = 0;

    document.getElementById('milisec').innerHTML="00";
    document.getElementById('sec').innerHTML="00";
    document.getElementById('min').innerHTML="00";
    document.getElementById('hr').innerHTML="00";

   
}

function stopwatch(){
    if(timer==true){
          
 count = count+1;
 if(count==100){
     sec=sec+1;
     count=0;
     }
     if(sec==60){
         min=min+1
         sec=0;
     }
     if(min==60){
        hr=hr+1
        min=0;
        

    }
    let countstring = count;
    let hrstring= hr;
    let secstring= sec;
    let minstring = min;

     if(count<10){
         countstring="0" +countstring;

     }
     if(sec<10){
        secstring="0" +secstring;
    }
    if(min<10){
        minstring="0" +minstring;
    }
    if(hr<10){
        hrstring="0" +hrstring;
    }
 document.getElementById('milisec').innerHTML=countstring;
 document.getElementById('sec').innerHTML=secstring;
 document.getElementById('min').innerHTML=minstring;
 document.getElementById('hr').innerHTML=hrstring;
 


        setTimeout("stopwatch()",10)
    }
}
