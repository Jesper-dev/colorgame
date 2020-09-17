let numSquares = 6;
let colors = [];
let pickedColor;

let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay")
let messageDisplay = document.querySelector(".message")
let h1 = document.querySelector("h1");
let resetButton = document.querySelector(".reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init(){
 
    setupSquares();
    setupModeButtons();
    
    reset();
}

function setupSquares(){
    for(let i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", function(){
           let clickedColor = this.style.backgroundColor;
           if(clickedColor === pickedColor){
               messageDisplay.textContent = "Correct";
               resetButton.textContent = "Play Again.. please :(";
               changeColors(clickedColor);
               
           }else{
               this.style.backgroundColor = "#454545";
               messageDisplay.textContent = "Try Again!"
           }
        });
    }
}

function setupModeButtons(){
  //Mode buttons event listeners
  for(let i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
       modeButtons[0].classList.remove("selected");
       modeButtons[1].classList.remove("selected");
       this.classList.add("selected");
       
       //Does exactly what an if statement does
       this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
       reset();
    });
  }
}


function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
        
    }
    h1.style.backgorundColor = "rgb(20, 0, 250)";
}


resetButton.addEventListener("click", function(){
    reset();
});

function changeColors(color){
   for(let i = 0; i < squares.length; i++){
       squares[i].style.backgroundColor = color;
   }
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    let array = []

    for(let i = 0; i < num; i++){
      array.push(randomColor())  
      
    }
    return array;
 }
 
 function randomColor(){
     
     let r = Math.floor(Math.random() * 256); 
     let g = Math.floor(Math.random() * 256); 
     let b = Math.floor(Math.random() * 256);
     
     return "rgb(" + r + ", " + g + ", " + b + ")";
 }

