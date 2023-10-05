var timer = 60;
var score = 0;
var hitrn = 0;

function increasescore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getnewhit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrn
}
function makebubble(){
    var clutter = ""
for(var i=1;i<=136;i++){
    var hitrn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${hitrn}</div>`
}
document.querySelector("#pbtm").innerHTML = clutter
}

function runtimer(){
    var timerinter = setInterval(function(){
        if(timer>0){
                timer--;
                document.querySelector("#timerval").textContent = timer

        }
        else{
            clearInterval(timerinter)
            document.querySelector("#pbtm").innerHTML = ""
            document.querySelector("#pbtm").innerHTML = `<h1 id="final-score">Score : ${score}</h1>`
        }
    },1000)
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednumber = Number(dets.target.textContent);
    if(clickednumber === hitrn){
        increasescore();
        makebubble();
        getnewhit();
    }
})

makebubble();
runtimer();
getnewhit();
