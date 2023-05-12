const mainGrid = document.querySelector('.mainGrid');
const mainContainer = document.querySelector('.mainContainer');
const btns = document.querySelectorAll('.btn');
const resetBtn = document.querySelector('.reset');
const onOff = document.querySelector('.brushState');
const inputButton = document.querySelector('.inputBtn');
let colorArray = ['black','green','blue','red','white','yellow','orange','palevioletred'];
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

inputButton.addEventListener("click", ()=>{
    let userinput = window.prompt("Enter number of grids that you desire");
    while(userinput>100){
       userinput = window.prompt("Enter your desired number of grids less than 100"); 
    }
    let newPad = (800 / userinput)/2;
    console.log(newPad);
    grids.forEach(grid =>{
        grid.remove();
    });

    blocks.forEach(block =>{
            for(let i=1; i<=userinput; i++){
                let newGrid = document.createElement('div');
                newGrid.style.padding = newPad + "px";
                newGrid.addEventListener("mouseover", color);
                block.appendChild(newGrid);
            }
    });
    
});


const grids = document.querySelectorAll('.smallGrid');
const blocks = document.querySelectorAll('.blockGrid');

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

resetBtn.style.backgroundColor = 'aliceblue';
resetBtn.style.fontSize = '20px';

function danger(){
    this.style.background = 'red';
    this.style.color = 'blue';
}
resetBtn.addEventListener("mouseover", danger);
resetBtn.addEventListener("mouseout", ()=>{
    resetBtn.style.backgroundColor = 'aliceblue';
    resetBtn.style.color = 'red';
});
function reset(){
    grids.forEach(grid =>{
        grid.style.backgroundColor = 'white';
    })
}
resetBtn.addEventListener("click", reset);

inputButton.style.backgroundColor = 'aliceblue';
inputButton.addEventListener("mouseover", danger);
inputButton.addEventListener("mouseout", ()=>{
    inputButton.style.backgroundColor = 'aliceblue';
    inputButton.style.color = 'black';
});

