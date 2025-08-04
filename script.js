const boxes= document.querySelectorAll(".box");
const reset= document.querySelector("#reset");
const msg= document.querySelector("#msg");
const game_winner= document.querySelector(".game_winner"); 
const gameDraw= document.querySelector(".gameDraw");
const draw= document.querySelector("#draw");

let turn0 = true;
let winnerFound= false;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () =>{

    turn0=true;
    winnerFound=false;
    enableBoxes();
    game_winner.classList.add("hidden");   
    gameDraw.classList.add("hidden");
}



boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{

        if(turn0){
            box.innerText="X";
            turn0=false;

        }else{
            box.innerText="O";
            turn0=true

        }
        box.disabled=true;

        checkWinner();
    });
    
});


const drawGameEnd= ()=>{

    gameDraw.classList.remove("hidden");
    draw.innerText= "Game is a draw";

}


const disableBoxes= ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes= ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const displayWinner= (winner)=>{
    game_winner.classList.remove("hidden");
    msg.innerText= `Congratulations! ${winner} is the winner`;
    
    
}

const checkWinner= () =>{
    for(let patterns of winPatterns){
        let posi1Val= boxes[patterns[0]].innerText;
        let posi2Val= boxes[patterns[1]].innerText;
        let posi3Val= boxes[patterns[2]].innerText;

        if(posi1Val != "" && posi2Val != "" && posi3Val !=""){
            if( posi1Val === posi2Val && posi2Val === posi3Val){
                
                displayWinner(posi1Val);
                disableBoxes();
                winnerFound=true;
                return;
                
               
            }
        }
     
    }
    if(!winnerFound){
        let isFilled=true;
        boxes.forEach((box)=>{
            if(box.innerText === ""){
                isFilled=false;
            }
        });
        if(isFilled){
            drawGameEnd();
        }
    }
      
    
}


reset.addEventListener("click",resetGame);


