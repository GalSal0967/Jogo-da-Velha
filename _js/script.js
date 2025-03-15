const cellElements = document.querySelectorAll("[data-cell]");


let itsCircleTurn;

const placeMark = (cell, ClassToAdd) => {
    cell.classList.add(ClassToAdd);
};

const handleClick = (e) => {
    // Colocar ou X ou Circulo
    const cell = e.target;
    const ClassToAdd = itsCircleTurn ? 'circle' : 'x';

   placeMark(cell, ClassToAdd);

    // Verificar se foi Vitoria de qual dos dois ou se foi Empate
    // Mudar simbolo de X ou Circulo cada vez que um for colocado



};

for (const cell of cellElements) {
    cell.addEventListener("click", handleClick, {once : true});
}

