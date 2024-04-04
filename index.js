// Detecting the button press by mouse...

for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var drumCharacter = this.innerHTML;
        makeSound(drumCharacter);
        buttonAnnimation(drumCharacter);
    });
}

// Detecting the keyboard press...

document.addEventListener("keydown",function(event){
    var drumCharacterKeyboard = event.key;    // Returns a string representing the key value of the key represented by the event.
    makeSound(drumCharacterKeyboard);
    buttonAnnimation(drumCharacterKeyboard);
})

// Function that makes the sound play...

function makeSound(key){
    switch(key){
        case "w":
            new Audio("./sounds/tom-4.mp3").play();
            break;
        case "a":
            new Audio("./sounds/tom-3.mp3").play();
            break;
        case "s":
            new Audio("./sounds/tom-2.mp3").play();
            break;
        case "d":
            new Audio("./sounds/tom-1.mp3").play();
            break;
        case "j":
            new Audio("./sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("./sounds/kick-bass.mp3").play();
            break;
        case "l":
            new Audio("./sounds/crash.mp3").play();
            break;
        default:
            console.log(key);
    }
}

function buttonAnnimation(currentKey){
    document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+currentKey).classList.remove("pressed");
    }, 100);
}