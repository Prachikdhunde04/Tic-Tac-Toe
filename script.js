let box = document.querySelector("#box");
let start = document.querySelector("#start");
let reset = document.querySelector("#reset");
let boxe = document.querySelectorAll(".boxe");
let ov = document.querySelector(".ov");

let turnO = true;
let count =0 ;
const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]
const disablegame = () => {
    boxe.forEach((box) => {
        box.disabled = true;
    });
}
const enablegame = () => {
    boxe.forEach((box) => {
        boxe.forEach((boxes) => {
            boxes.innerText = " ";
        });
        box.disabled = false;
        turnO = true;
        count=0;
        ov.classList.add("hide");
    });
}

const showwin = (pos1Val) => {
    ov.innerText = `Congratulations: ${pos1Val}, Youu Winn!`
    disablegame();
    ov.classList.remove("hide")
}

const checkwin = () => {
    for (let pattern of win) {
    let pos1Val = boxe[pattern[0]].innerText;
    let pos2Val = boxe[pattern[1]].innerText;
    let pos3Val = boxe[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
            showwin(pos1Val);
        }else{
            if (count == 9){
        console.log(count);
        ov.innerText = `Its a Draw!`;
        ov.classList.remove("hide");
        disablegame();
        }
    }
    }
    }
}
boxe.forEach((boxes) => {  
    boxes.addEventListener("click",() => {
    if (turnO) {
        boxes.innerText ="O";
        turnO = false;
        count+=1;
    }else{
        boxes.innerText ="X";
        turnO = true;
        count+=1;
    }
    boxes.disabled = true;
    checkwin();
    });
});

start.addEventListener("click",()=>{
    enablegame();
});
reset.addEventListener("click",()=>{
    enablegame();
});