
const slider = document.getElementById("gridSlider")

//creates a single square into the grid
function createSquare(){
    const container = document.querySelector('#container');
    const square = document.createElement('div')
    square.classList.add('item');
    square.id = ("item");
    container.appendChild(square); 
}


//creates a new grid that i sized based on the users input
function createGrid(gridInput){ 
    const grid = document.querySelector('#container');
    grid.style["grid-template-columns"] = `repeat(${gridInput}, 1fr)`;
    grid.style["grid-template-rows"] = `repeat(${gridInput}, 1fr)`; 
    
  for(i = 0; i < gridInput * gridInput; i++) {
    
    createSquare()    
    
 }
 addDraw()
};

//creates initial grid, set to 16 by default
createGrid(slider.value);

//Clicking the reset button will first clear the previous grid
const reset = document.querySelector("#resetButton");
reset.addEventListener("click", () => {
  document.querySelectorAll(".item").forEach(e => e.parentNode.removeChild(e));
  createGrid(slider.value);
});

//Function for the "drawing" effect
function addDraw(){
let pixel = document.getElementsByClassName("item");
for ( i = 0; i < pixel.length; i++) {
    pixel[i].addEventListener("mouseover",function() {
        this.style.backgroundColor = "black"
    });
}; 
}

//a button that swaps to "darkmode"
const blackWhite = document.getElementById("blackWhiteButton")
      blackWhite.addEventListener("click", () => {
        let backGround = document.querySelectorAll(".item")
        for( i = 0; i < backGround.length; i++) {
          backGround[i].style.backgroundColor="black"
          backGround[i].addEventListener("mouseover",function() {
            this.style.backgroundColor = "white"
        
        })
      }
      });
//a button that swaps to rainbow mode
      const rainBow = document.getElementById("rainBowButton")
      const rainBowColor = ["red", "orange", "blue", "green", "yellow", "indigo", "violet"]
      rainBow.addEventListener("click", () => {
        
        let backGround = document.querySelectorAll(".item")
        for( i = 0; i < backGround.length; i++) {
          backGround[i].style.backgroundColor="white"
          backGround[i].addEventListener("mouseover",function() {
            let randomColor = rainBowColor[Math.floor(Math.random()*rainBowColor.length)]
            this.style.backgroundColor = `${randomColor}`;
            
        })
      }
      });



//Displays the value chosen with the slider and updates the value as user uses slider
const sliderContainer = document.querySelector(".sliderContainer");
const sliderText = document.createElement('p');
sliderText.classList= ("sliderValue");
sliderText.textContent = (`${slider.value}`);
sliderContainer.appendChild(sliderText);
slider.addEventListener("change", () => {
  sliderText.textContent = (` ${slider.value}`);
})
