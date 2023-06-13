const container = document.getElementById("container");

function makeGrid (rows, columns){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', columns);

    for (c = 0; c < (rows * columns); c++){
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }
}

makeGrid(16, 16);

function hovered(colorType){  
    let etch = document.getElementsByClassName("grid-item");

    if(colorType =='colored'){
        for (let i = 0; i < etch.length; i++){
            etch[i].addEventListener('mouseover', function(){
                this.style.backgroundColor = getRandomColor();
            });
        }
    }

    else if(colorType == 'black') {
        for (let i = 0; i < etch.length; i++){
            etch[i].addEventListener('mouseover', function(){
            this.style.backgroundColor = "black";
        });
    }
 } 
}

function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let hex = '#';

    for (let i = 0; i < 6; i++) {
        hex += letters[Math.floor(Math.random() * 16)];
    }
    return hex;
  }
  
function getNewBoard(){    
    let squares = '';
    let removeOldGrid = document.getElementById("container");
    removeOldGrid.innerHTML = '';

    do{
        squares = prompt('How many number of squares per side? Number should be eual or lower than 100.',0);
    } while (squares > 100);
    
    makeGrid(squares, squares);
    hovered('black');
}