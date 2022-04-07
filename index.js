//html elements needed for project
const grid = document.getElementById("pixelCanvas")
const sizePicker = document.getElementById('sizePicker')
const colorPicker =document.getElementById('colorPicker')

const inputHeight = document.getElementById('inputHeight')

const inputWidth = document.getElementById('inputWidth')

//listen for submit on size picker form
sizePicker.addEventListener('submit', function(e){
  //prevent refresh
  e.preventDefault()
  //store values for height and width
  let height = inputHeight.value;
  let width = inputWidth.value;
  //reset grid
  grid.innerHTML = "";

  makeGrid(height, width)
})
//listen for clicks on page
document.addEventListener('click', function(e){
  //only react if its a TD element
  if(e.target.tagName == 'TD') {   
    //change background of square to color picker element color   
    e.target.style.backgroundColor = colorPicker.value;
  }

  
})

function makeGrid(h, w){
  //outside loop makes rows. Inside loop adds to columns
  for(let i = 1; i <= h; i++){
    const row = document.createElement('tr');
    grid.appendChild(row)
    for(let j = 1; j <= w; j++){
      const column = document.createElement('td');
      row.appendChild(column)
    }
  }
}