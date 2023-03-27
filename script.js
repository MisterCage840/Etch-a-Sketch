const mainContainer = document.querySelector(".mainContainer");
const stat= document.querySelector(".status");

stat.textContent = "Brush on";

for(let i=1; i<=16;i++){
    let newDiv = document.createElement('div');
    newDiv.classList = "container";
    mainContainer.appendChild(newDiv);
    for(let f=1;f<=16;f++){
        let insideDiv = document.createElement('div');
        insideDiv.classList = "contEl";
        newDiv.appendChild(insideDiv);
    }
}
document.body.addEventListener("keydown",(event)=>{
    if(event.isComposing || event.key === 'a'){
        console.log(event.key);
        if(stat.textContent == "Brush on"){
            stat.textContent = "Brush off";
            stat.style.backgroundColor = "grey";
        } 
        else if(stat.textContent == "Brush off"){
            stat.textContent = "Brush on";
            stat.style.backgroundColor = "lightgreen";
        }
    }
})

const grids = document.querySelectorAll(".contEl");
grids.forEach(grid=>{
    grid.addEventListener("mousemove", ()=>{
        if(stat.textContent == "Brush on")
            grid.style.backgroundColor = "black";
        })
    });