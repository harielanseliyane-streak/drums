document.addEventListener("keydown", function(event){
    console.log(event.key);
    playsound(event.key);
    buttonbright(event.key);
})

function playsound(event){
    if (event == "k"){
        new Audio("./sounds/tom-1.mp3").play();
    }
    else if(event == "f"){
        new Audio("./sounds/tom-2.mp3").play();
    }
    else if(event == "a"){
        new Audio("./sounds/tom-3.mp3").play();
    }
     else if(event == "s"){ 
        new Audio("./sounds/tom-4.mp3").play();
    }
      else if(event == "d"){
        new Audio("./sounds/snare.mp3").play();
    }
      else if(event == "j"){
        new Audio("./sounds/kick-bass.mp3").play();
    }
      else if(event == "l"){
        new Audio("./sounds/crash.mp3").play();
    }
}
// for(var i=0; document.querySelectorAll("button").length;i++){
// document.querySelectorAll("button")[0].addEventListener("click", function(){
//     document.querySelectorAll("button")[0].classList.add("pressed");

// }); 
for (let i = 0; i < 7; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var key = document.querySelectorAll("button")[i];
    buttonbright(key.textContent);
    playsound(key.textContent);
    console.log(key);
    console.log(key.textContent);
    
  });
}
function buttonbright(key){
    var button = document.querySelector("."+key);
    button.classList.add("pressed");
    setTimeout(function () {
      button.classList.remove("pressed");
    }, 100);

}2