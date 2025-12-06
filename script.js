var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scorevalue").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random() * 10)
    document.querySelector("#hitvalue").textContent = hitrn;
}

function makeBubble(){
    var clutter = "";

for(var i = 1; i<=133; i++){
    var num = Math.floor(Math.random()*10)
    clutter += `<div id="bubble">${num}</div>`
}
document.querySelector("#bottom").innerHTML = clutter;
}

function runTimer(){
    var intTimer = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timer").textContent = timer;
        }else{
            clearInterval(intTimer);
            document.querySelector("#bottom").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000)
}

document.querySelector("#bottom")
.addEventListener("click",function(details){
   var clickednum =  Number (details.target.textContent);
   if(clickednum === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
   }
   
})


makeBubble();

getNewHit();

runTimer();

