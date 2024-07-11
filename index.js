//named-function
// document.querySelectorAll(".drum")[0].addEventListener("click",handleclick);
// function handleclick(){
//     alert("I got clicked!");
// }

// anonymous function
var numberOfDrumButton=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrumButton;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    // alert("I got clicked!");
    // this->to select clicked one
    // this.style.color="white";
    var buttonInnerHtml=this.innerHTML;
     //Detecting key clicked
    makesound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
});
} 
 
document.addEventListener("keypress",function(Event){
    //Detecting key-board button press
    makesound(Event.key);
    buttonAnimation(Event.key);
});

function makesound(key){
    switch (key) {
        case 'w':
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case 'a':
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 's':
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'd':
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'j':
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case 'k':
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case 'l':
            var kick_bass=new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;
    
        default:
            console.log("no sound");
           
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}

// var audio=new Audio("sounds/tom-1.mp3");
//     audio.play();
// higher order function

// function add(num1,num2){
//     return num1+num2;
// }
// function multiply(num1,num2){
//     return num1*num2;
// }
// function subtraction(num1,num2){
//     return num1-num2;
// }
// function divide(num1,num2){
//     return num1/num2;
// }
// function modulo(num1,num2){
//     return num1%num2;
// }
// function calculator(num1,num2,operator){
//     return operator(num1,num2);
// }






// callback function:-

// function anotherAddEventListener(typeOfEvent,callback) {
//     //Detect Event Code....
    
//     var eventThatHappened={
//     eventType:"keypress",
//     key:"P",
//     durationOfKeyPress:2
//     }
    
//     if(eventThatHappened.eventType===typeOfEvent){
//     callback(eventThatHappened);
//     }
    
// }

// anotherAddEventListener("keypress",function (event){
//     console.log(event);
// });
    
