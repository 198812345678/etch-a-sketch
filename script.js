const container = document.querySelector('.container');

// add a 16x16 grid using flexbox
addGrid(16);

function addGrid(gridNum) {
    for (let i = 0; i < gridNum; i++) {
        for (let j = 0; j < gridNum; j++) {
            const div = document.createElement('div');
            div.classList.add('square');
            div.style.flexBasis = `calc(100% / ${gridNum} - 2px)`;
            container.appendChild(div);
        }
    }
}

function removeGrid() {
    const grid = document.querySelectorAll('.square');
    grid.forEach(square => {
        square.remove();
    });
}

function clickBtn(event) {
    const gridNum = prompt('How many squares per side?', 16);
    removeGrid();
    addGrid(gridNum);
}

const btn = document.createElement('button');
btn.textContent = 'Reset';
btn.addEventListener('click', clickBtn);

document.querySelector('body').insertBefore(btn, container);

function mouseover(event) {
    event.target.style.backgroundColor = 'black';
}

function mouseout(event) {
    event.target.style.backgroundColor = 'white';
}

document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('mouseover', mouseover);
    square.addEventListener('mouseout', mouseout);
});
