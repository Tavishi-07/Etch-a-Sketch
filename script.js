const sizeButtons = document.querySelectorAll('.size');

function generateGrid(size = 32 * 44, cssClass = 'medium-grid-default') {       
  const gameContainer = document.getElementById('grid-container');

  gameContainer.innerHTML = '';

  gameContainer.classList.remove('small-grid', 'medium-grid-default', 'big-grid');
  gameContainer.classList.add(cssClass);

  for (let i = 0; i < size; i += 1) {
    const div = document.createElement('div');
    gameContainer.appendChild(div);
  }
}

function erase() {
  const gridItems = document.querySelectorAll('#grid-container > div');

  gridItems.forEach((item) => {
    item.style.backgroundColor = '#fff';
  });
}

function startPainting() {
    const gridItems = document.querySelectorAll('#grid-container > div');
  
    gridItems.forEach((item) => {
      item.count = 0;
      item.addEventListener('mouseenter', (e) => {
        
          e.target.style.backgroundColor = '#707070';
          e.target.style.opacity = 1;                                 
      });
    });
  }
  
  function selectButton(button) {
      sizeButtons.forEach((selection) => {
        selection.classList.remove('active-button');
      });
    
    button.classList.add('active-button');
  }

  function changeSize() {                                                  
    const small = 16 * 22;
    const medium = 32 * 44;
    const big = 64 * 88;
  
    sizeButtons[1].classList.add('active-button');
  
    sizeButtons.forEach((selection) => {
      selection.addEventListener('click', () => {
        if (selection.classList.contains('small')) {
          erase();
          generateGrid(small, 'small-grid');
          startPainting();
          selectButton(selection);
        } else if (selection.classList.contains('medium')) {
          erase();
          generateGrid(medium, 'medium-grid-default');
          startPainting();
          selectButton(selection);
        } else {
          erase();
          generateGrid(big, 'big-grid');
          startPainting();
          selectButton(selection);
        }
      });
    });
  }

  
  function eraseListener() {
  const eraseButton = document.querySelector('.erase');

  eraseButton.addEventListener('click', erase);
}

function startGame() {
  generateGrid();
  startPainting();
  changeSize();
  eraseListener();
}

startGame();