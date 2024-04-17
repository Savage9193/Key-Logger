const logDiv= document.getElementById("log");
const stateDiv= document.getElementById("state");
const strt= document.getElementById("start");
const stp= document.getElementById("stop");



strt.addEventListener("click",() =>{
    document.addEventListener("keydown",handleDown);
    document.addEventListener("keyup",handleup);
    strt.disabled= true;
    stp.disabled= false;
    
})


stp.addEventListener("click",() =>{
    document.removeEventListener("keydown",handleDown);
    document.removeEventListener("keyup",handleup);
    logDiv.textContent=" ";
    stateDiv.textContent=" ";
    strt.disabled= false;
    stp.disabled= true;
})



function handleDown(r){
    logDiv.textContent= `key ${r.key} pressed down` ;
    stateDiv.textContent= "key is down" ;
}



function handleup(r){
    logDiv.textContent= `key ${r.key} pressed up` ;
    stateDiv.textContent= "key is up" ;
}
