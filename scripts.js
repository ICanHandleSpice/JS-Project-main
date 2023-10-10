targetNumber = Math.random()*99 + 1;
const startButton = document.getElementById("start");
var currentNumber = document.getElementById("Num");
var numVar = 50;

function changeVal(id){
   switch(id){
    case id === "m25":
        numVar = numVar - 25;
        break;
    case id === "m10":
        numVar -= 10;
        break;
    case id === "m5":
        numVar -= 5;
        break;
    case id === "m":
        numVar--;
        break;
    case id === "p":
        numVar++;
        break
    case id === "p5":
        numVar += 5;
        break;
    case id === "p10":
        numVar += 10;
        break;
    case id === "p25":
        numVar += 25;
        break
    default:
        break;
    

    }
    display();
}

function display() {
currentNumber.innerHTML = numVar;
}
