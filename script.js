let newGame = document.querySelector("#newGame");
let container = document.querySelector("#container");
let game = document.querySelector("game");
let boxes = document.querySelectorAll(".box");
let resetGame = document.querySelector("#resetGame");
/* to turn the value */
let turn = true;
/* winning pattern of boxes */
let winningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,5],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
  /* for making clickable for each boxes*/
  boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      if(turn){
        box.innerText = "x";
        turn = false;
      }
      else{
        box.innerText = "o";
        turn = true;
        box.style.color = "green";
       
      }
      box.disabled = true;
      checkWinner();
    })
    
  })
    /* to checkwinner of all the position pattern */
  const checkWinner = ()=>{
  for(let pattern of winningPattern){
     let posValue1 = boxes[pattern[0]].innerText;
     let posValue2 = boxes[pattern[1]].innerText;
     let posValue3 = boxes[pattern[2]].innerText;
     if(posValue1!="" && posValue2!="" && posValue3!=""){
        if(posValue1===posValue2 && posValue2===posValue3  ){
            // console.log(`winner${posValue1}`);
            showWinner();
        }
     }
        
  }
}
/* to check the winner */
const showWinner = ()=>{
    for(let box of boxes){
        console.log("congrats");
        boxesdisabled()
    }
}
 /* disable the button after winning player */
const boxesdisabled =()=>{
    for(let dis of boxes){
        dis.disabled = true;
    }
}

/* for enable boxes */
const boxesEnable =()=>{
    for(let dis of boxes){
        dis.disabled = false;
        dis.innerText ="";
    }
}

/* for Reset */
const gameReset =()=>{
    turn = true;
    boxesEnable()
}


/* for reset and newGame */
resetGame.addEventListener("click",gameReset);
newGame.addEventListener("click",gameReset);
