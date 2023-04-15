let images=["diecs1.png","diecs2.png","diecs3.png","diecs4.png","diecs5.png","diecs6.png"];
let dices=document.querySelectorAll("img");
function roll(){
dices.forEach(function(die){
die.classList.add("shake");
});
setTimeout(function(die){
    dices.forEach(function(die){
        die.classList.remove("shake");
    });
    let play1= Math.floor(Math.random()*6);
    let play2= Math.floor(Math.random()*6);
    console.log(play1,play2);
document.querySelector("#die1").setAttribute("src",images[play1]);

document.querySelector("#die2").setAttribute("src",images[play2]);
if(play1>play2){
    document.querySelector('p') .innerHTML="player 1 won";
}
else if(play1<play2){
    document.querySelector('p') .innerHTML="player 2 won";
}
else{
    document.querySelector('p') .innerHTML="draw";
}
},
1000
);
}




