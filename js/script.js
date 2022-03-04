// ********** FUNCTION **********

const playGround = document.getElementById('my-play-groud');

function createGridSquare() {
    const currentElement = document.createElement('div')
    currentElement.classList.add('my-col')

    return currentElement;
}


function createCol(nBox) {
    for(let i = 0; i < nBox; i++) {
        const currentSquare = createGridSquare();
        currentSquare.innerHTML = `${i + 1}`

        currentSquare.addEventListener('click', function() {
            this.classList.add('clicked')
        })

        playGround.appendChild(currentSquare);
    }
}

// ********** END FUNCTION **********


createCol(30);