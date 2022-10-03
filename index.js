var bList = document.querySelectorAll("button");

for (var i = 0; i < bList.length; i++){
    bList[i].addEventListener("click", function (){

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);   
        buttonPressedStyle(buttonInnerHTML);
    }   
    );
};

//keypress

document.addEventListener('keypress',function(element){
    
    var keyPressed = element.key;
    makeSound(keyPressed);
    buttonPressedStyle(keyPressed);
});

//*************function for making sound*************

function makeSound(keyT){

    switch (keyT) {
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
         case "a":
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;
         case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        
        default:
            break;
    }
};
//*************function for button style when pressed*************
function buttonPressedStyle (keyT){
    var acces2class = "."+keyT;
    document.querySelector(acces2class).classList.add("pressed");
    setTimeout(function(){
        document.querySelector(acces2class).classList.remove("pressed");
    },100);

};