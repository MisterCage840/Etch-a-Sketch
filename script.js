const mainGrid = document.querySelector('.mainGrid');
const mainContainer = document.querySelector('.mainContainer');
const btns = document.querySelectorAll('button');
const onOff = document.querySelector('.brushState');
let colorArray = ['black','green','blue','red'];
let fillColor = ""; 
for(let i=0; i<btns.length; i++){
    let temp = btns.item(i);
    temp.style.backgroundColor = colorArray[i];
}
for(let i=1; i<=16; i++){
    let blockGrid = document.createElement('div');
    blockGrid.classList = 'blockGrid';
    for(let f=1; f<=16;f++){
        let smallGrid = document.createElement('div');
        smallGrid.classList = 'smallGrid';
        smallGrid.addEventListener("mouseover", color);
        blockGrid.appendChild(smallGrid);
    }
    mainGrid.appendChild(blockGrid);
}
const grids = document.querySelectorAll('.smallGrid');

window.addEventListener("keydown",(event)=>{
    let key = event.key;
    if(key == 'a'){
        if(onOff.textContent == "Brush on"){
            onOff.textContent = "Brush off";
            grids.forEach(grid =>{
                grid.removeEventListener("mouseover", color);
            })
        }
        else if(onOff.textContent == "Brush off"){
            onOff.textContent = "Brush on";
            grids.forEach(grid =>{
                grid.addEventListener("mouseover", color);
            })
        }
    }
});
btns.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        fillColor = btn.style.backgroundColor;
    });
});

function color (){
    this.style.background = fillColor;
}




