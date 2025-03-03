let theButtons = document.querySelectorAll('#buttonHolder img'),
puzzleBoard = document.querySelector('.puzzle-board'),
puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
dropZones = document.querySelectorAll('.drop-zone'),
draggedPiece;

function changeBGImage() {
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}

function handleStartDrag() {
    console.log('started dragging this piece ', this);
    draggedPiece = this;
}

function handleDragOver(e) {
    e.preventDefault();
    console.log('you dragged over me');
}

function handleDrop(e) {
    e.preventDefault();
    console.log(`dropped something on me`);

    //add code to check if there is dragged piece already in the drop zone with if/else

    if (this.firstElementChild) {
        console.log("This drop zone is already taken!");
    }
    else {
        this.appendChild(draggedPiece);
    }


}

theButtons.forEach(button => button.addEventListener('click', changeBGImage));

puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));

dropZones.forEach(zone => zone.addEventListener('dragover', handleDragOver));

dropZones.forEach(zone => zone.addEventListener('drop', handleDrop));

// reset button
let resetButton = document.querySelector("#resetBut");

// function to reset the puzzle pieces
function resetPuzzle() {
    console.log('reset the puzzle');

    puzzlePieces.forEach(piece => {
        document.querySelector(".puzzle-pieces").appendChild(piece);
        
    });
}

// listen the event
resetButton.addEventListener("click", resetPuzzle);
