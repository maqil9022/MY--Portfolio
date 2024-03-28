// var sound = new Audio('sound.mp3');
//     sound.play();
for(var i=0;i<7;i++){
document.querySelectorAll("button")[i].addEventListener("click", function (){
    var innerHTML = this.innerHTML;
    makesound(innerHTML);
    btnanimation(innerHTML);
});}

document.addEventListener("keydown",function(event){
    makesound(event.key);
    btnanimation(event.key);
});
function makesound(key){
    switch(key){
        case "w":
            var sound = new Audio('./sounds/tom-1.mp3');
            sound.play();
            break;
        case "a":
            var sound = new Audio('./sounds/tom-2.mp3');
            sound.play();
        break;
        case "s":
            var sound = new Audio('./sounds/tom-3.mp3');
            sound.play();
        break;
        case "d":
            var sound = new Audio('./sounds/tom-4.mp3');
            sound.play();
        break;
        case "j":
            var sound = new Audio('./sounds/crash.mp3');
            sound.play();
        break;
        case "k":
            var sound = new Audio('./sounds/kick-bass.mp3');
            sound.play();
        break;
        case "l":
            var sound = new Audio('./sounds/snare.mp3');
            sound.play();
        break;
        default:console.log("somthing went wrong");
    }

}
function btnanimation(currentkey){
    var activebtn = document.querySelector("."+currentkey);
    activebtn.classList.add("pressed");
    var timeout = setTimeout(() => {
        activebtn.classList.remove("pressed");
    }, 100);
}
