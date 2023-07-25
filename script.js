const container = document.getElementById('container');
const resizeButton = document.getElementById('resizeButton');

function createGrid(size) {
    container.innerHTML = '';
    container.style.setProperty('--grid-size', size);
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', changeColor);
        container.appendChild(square);
    }
}

function changeColor(e) {
    const randomColor = getRandomColor();
    e.target.style.backgroundColor = randomColor;
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function promptGridSize() {
    let newSize = prompt('Enter the number of squares per side (1-100):');
    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert('Invalid input. Please enter a number between 1 and 100.');
    } else {
        createGrid(newSize);
    }
}

resizeButton.addEventListener('click', promptGridSize);

// Initialize with a 16x16 grid
createGrid(16);
