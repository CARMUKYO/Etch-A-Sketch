const container = document.getElementById("container");

function makeRows (rows, columns){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', columns);

    for (c = 0; c < (rows * columns); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }
}

makeRows(16, 16);

let paint = document.getElementsByClassName("grid-item");

function hovered(){  
    for (let i = 0; i < paint.length; i++)
    {
        paint[i].addEventListener('mouseover', function(){
            this.style.backgroundColor = "black";
        });

    }
}

function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
function enableMultiColor(){
    console.log('poop');
    paint = document.getElementsByClassName("grid-item");

    for (let i = 0; i < paint.length; i++)
    {
        paint[i].addEventListener('mouseover', function(){
            this.style.backgroundColor = getRandomColor();
        });
    }
}

hovered();

function getNewBoard(){
    let squares = '';
    let removeOldGrid = document.getElementById("container");
    removeOldGrid.innerHTML = '';

    do{
    squares = prompt('How many number of squares per side? Number should be eual or lower than 100.',0);
    console.log(squares);
    } while (squares > 100);
    
    makeRows(squares, squares);
    paint = document.getElementsByClassName("grid-item");
    hovered();
}

function clearBoard(){
    for (let i = 0; i < paint.length; i++){
        paint[i].style.backgroundColor = "";  
    }
    getNewBoard();
}
