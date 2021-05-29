/*----- constants -----*/
const MAX_MOVES = 9
const winNums = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
];


/*----- app's state (variables) -----*/
let gameStatus; 


/*----- cached element references -----*/
const buttonEl = document.querySelectorAll(".box");
const replayEl = document.querySelectorAll(".replay");




/*----- event listeners -----*/
document.querySelector(".box").addEventListener("click", handleBoxClick);


/*----- functions -----*/