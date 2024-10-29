let boxes= document.querySelectorAll(".clickingBox");
let resetBTN= document.querySelector("#reset");
let msg = document.querySelector("#msg")
let msgcontainer = document.querySelector("#msg-container")
let newGameBtn = document.querySelector("#new-btn")


let turnO = true; //player X , player O

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

const resetGame =() =>{
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");

}

boxes.forEach((box)=>{
    box.addEventListener("click" , ()=>{
         if(turnO){
            box.innerHTML ="O";
            turnO = false;
        }else{
                box.innerHTML ="X";
                turnO= true;
            }

            box.disabled = true;
         checkWinner ();
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;    
    }
};
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;  
        box.innerHTML = "";
    }
};

const showWinner = (winner) =>{
    msg.innerHTML = `WINNER IS ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () =>{
    for(let pattern of winpatterns) {
        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;
        if (pos1Val != "" && pos2val != "" && pos3val != "" ){
            if (pos1Val === pos2val && pos2val === pos3val){
                // msg.innerHTML=(`WINNER  ${pos1Val}`)
                showWinner(pos1Val);
            }
        }
    }
};

resetBTN.addEventListener("click" , resetGame)
newGameBtn.addEventListener("click" , resetGame)
