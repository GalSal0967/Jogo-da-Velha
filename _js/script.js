const cellElements = document.querySelectorAll("[data-cell]");
const board = document.querySelector("[data-board]");
const winningMessageTextElement = document.querySelector("[data-winning-message-text]");
const winningMessage = document.querySelector("[data-winning-message]")
const restartButton = document.querySelector("[data-restart-button]")

let itsCircleTurn;


const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
];





const startgame = () => {
    
    for (const cell of cellElements) {
        cell.classList.remove("circle")

        cell.classList.remove("x")
        cell.removeEventListener("click", handleClick)
        cell.addEventListener("click", handleClick, {once : true})
    }

    itsCircleTurn = false

    setBoardHoverClass()
    winningMessage.classList.remove("show-winning-message")
};


const endGame = (isDraw) => {
    if (isDraw) {
        winningMessageTextElement.innerText = "Empate!"
    }
    else {
        winningMessageTextElement.innerText = itsCircleTurn ? 
        'O Venceu!' : 'X Venceu!';
    }


    winningMessage.classList.add("show-winning-message");
}





const placeMark = (cell, ClassToAdd) => {
    cell.classList.add(ClassToAdd);
};


const checForWin = (currenctPlayer) => {
    return winningCombinations.some((combination) => {
        return combination.every((index) => {
            return cellElements[index].classList.contains(currenctPlayer);
        });
    });
};




const checkForDraw = () => {
    return [...cellElements].every(cell => {
        return cell.classList.contains('x') || cell.classList.contains('circle')
    })
}








const setBoardHoverClass = () => {
    board.classList.remove('circle')
    board.classList.remove('x')

    if (itsCircleTurn) {
        board.classList.add('circle')
    }

    else {
        board.classList.add('x')
    }
}






const swapTurns = () => {
    itsCircleTurn = !itsCircleTurn 
    setBoardHoverClass();
}


const handleClick = (e) => {
    // Colocar ou X ou Circulo
    const cell = e.target;
    const ClassToAdd = itsCircleTurn ? 'circle' : 'x';

   placeMark(cell, ClassToAdd);

    // Verificar se foi Vitoria de qual dos dois 

    const IsWin = checForWin(ClassToAdd);
    
    // Verificar empate
    const IsDraw = checkForDraw()
    
    if (IsWin) {
        endGame(false);
    }
    else if (IsDraw) {
        endGame(true)
    }

// Mudar simbolo de X ou Circulo cada vez que um for colocado
    else {
        swapTurns()
    }





};


startgame();

restartButton.addEventListener('click', startgame)
restartButton.addEventListener("click", startgame())