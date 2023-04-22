const mainGrid = document.querySelector('.mainGrid');
const mainContainer = document.querySelector('.mainContainer');

for(let i=1; i<=16; i++){
    let blockGrid = document.createElement('div');
    blockGrid.classList = 'blockGrid';
    for(let f=1; f<=16;f++){
        let smallGrid = document.createElement('div');
        smallGrid.classList = 'smallGrid';
        blockGrid.appendChild(smallGrid);
    }
    mainGrid.appendChild(blockGrid);
}

