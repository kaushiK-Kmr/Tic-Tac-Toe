let box=document.querySelectorAll(".btn");
let resetB = document.querySelector(".reset");
let newgmBtn = document.querySelector(".newGm");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let result = document.querySelector(".result");

let turnO = true;
let count = 0;

//User Choice
let choice = prompt("Please Enter your choice (X, O) :");
if(choice=='X' || choice == 'x') {
    turnO = false;
} 
else {
    turnO = true;
}

// Disable button
let disableBtn = () =>{
    box.forEach((btn) => {
            btn.disabled=true;
    });
};

//game button
box.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(turnO === false) {
            btn.innerText = "X";
            turnO=true;
        }
        else {
            btn.innerText = "O";
            turnO=false;
        }
        btn.disabled=true;
        checkWin();
        count++;
    });
});

//Reset Button
box.forEach((btn) => {
    resetB.addEventListener("click", ()=>{
        btn.innerText="";
        btn.disabled = false;
        count = 0;
    });
});

let winning = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

//Winner Function
const showWinner = (winner) => {
    msgContainer.classList.remove("hide");
    msg.innerText = `Congratulations, Winner is ${winner}!`;
    resetB.disabled = true;
    result.classList.remove("hide");
}


//Draw Function
const itsDraw = () => {
    msgContainer.classList.remove("hide");
    msg.innerText = `It's A Draw! Please try again.`;
    resetB.disabled = true;
}

let checkWin = () => {
    for(let posn of winning) {
        let pos1 = box[posn[0]].innerText;
        let pos2 = box[posn[1]].innerText;
        let pos3 = box[posn[2]].innerText;

        if(pos1!=="" && pos2!=="" && pos3!=="") {
            if(pos1 === pos2 && pos2 === pos3) {
              showWinner(pos1);
              disableBtn();
            }
            else if(count === 8) {
                itsDraw();
            }
        }
    }
};

//New Game Button
box.forEach((btn) => {
    newgmBtn.addEventListener("click", ()=>{
        btn.innerText="";
        btn.disabled=false;
        msgContainer.classList.add("hide");
        count = 0;
    });
});