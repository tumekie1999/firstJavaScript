var character = document.getElementById("character");
var block = document.getElementById("block");
var hole = document.getElementById("hole");
var counter=0;

hole.addEventListener('animationiteration', () => {
    var random = -((Math.random() * 80) + 500);
    hole.style.top = random + "px";
    
});

function jump(){
    if (character.classList == "animate"){
        return
    }
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    }, 300);
}

var checkDead = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var cTop = -(500 - characterTop);
    if (blockLeft<20 && blockLeft>-20 && cTop<=hole.style.top){
        block.style.animation = "none";
        alert("GAME OVER!!! Score:  " + Math.floor(counter/100));
        counter=0;
        block.style.animation = "run 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }  
},10);
