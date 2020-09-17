let colors = [
    "rgb(255, 68, 84)",
    "rgb(0, 68, 200)",
    "rgb(200, 100, 50)",
    "rgb(0, 0, 84)",
    "rgb(255, 68, 255)",
    "rgb(255, 255, 255)"
]

let squares = document.querySelectorAll(".square");
let pickedColor = colors[3];
let colorDisplay = document.getElementById("colorDisplay")

colorDisplay.textContent = pickedColor;


for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
       let clickedColor = this.style.backgroundColor;
       if(clickedColor === pickedColor){
           console.log("Correct");
       }else{
           console.log("Wrong");
       }
    });
}