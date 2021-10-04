function randomize(obj){
    let num = Date.now()

//If-Else
    // num%=10
    
    // if(num %2 === 0 ){
    //     document.getElementById("demo").innerHTML = "Boleh Juga!";
    // }
    // else if (!num %2 === 0){
    //     if(num === 1){
    //         document.getElementById("demo").innerHTML = "Hebat!";
    //     }
    //     else{

    //         document.getElementById("demo").innerHTML = "Mengerikan!" +;
    //     }
    // }

//Switch
    // num%=10
    // switch(num){
    //     case 1:
    //         document.getElementById("demo").innerHTML = "Hebat!";
    //     break;

    //     case 2:
    //         document.getElementById("demo").innerHTML = "Boleh Juga!";
    //         break;  

    //     case 3:
    //         document.getElementById("demo").innerHTML = "Mengerikan!";
    //         break;

    //     default:
    //         document.getElementById("demo").innerHTML = "Coba Lagi";
    //         break;
    // }

//persentase
     num%=10

    // //20% {0,1}
    if(num < 2){
        document.getElementById("demo").innerHTML = "Hebat!" ;
    }
    // //60% {2,3,4,5,6,7}
    else if(num < 8){
        document.getElementById("demo").innerHTML = "Boleh Juga!" ;
    }
    // //20% {8,9}
    else{
        document.getElementById("demo").innerHTML = "Mengerikan!" ;
    }

}
