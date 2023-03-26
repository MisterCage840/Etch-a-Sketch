for(let i=1; i<=16;i++){
    let newDiv = document.createElement('div');
    newDiv.classList = "container";
    document.body.appendChild(newDiv);
    for(let f=1;f<=16;f++){
        let insideDiv = document.createElement('div');
        insideDiv.classList = "contEl";
        newDiv.appendChild(insideDiv);
    }
}