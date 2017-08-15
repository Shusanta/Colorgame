var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares );
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay= document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")


init();

 function init()
{
 for(var i = 0; i<squares.length;i++)
{
	makeModeButtons();
	makeSquares();
    reset();
}

function makeSquares() {
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function(){	

		var clickedColor = this.style.background;	

		if(clickedColor === pickedColor) 
		{
			
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
				
		} 
		
		else {
			messageDisplay.textContent = "Try again";
			this.style.background = "#232323";
		}
		
	});
  }
}
function makeModeButtons() {
	for(var i = 0; i<modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;

		reset();
		// pick new colors and show the certain amount of squares
	})
 }
}


function reset() {
	colors = generateRandomColors(numOfSquares);
	//choose a color as correct
	pickedColor = pickColor();
	//change display
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		}

		else 
		{
			squares[i].style.display = "none";
		}
	}
	
	
	resetButton.textContent = "New Colors";
	messageDisplay.textContent =" ";
	colorDisplay.textContent = pickedColor;

}

resetButton.addEventListener("click",function() {
	reset();
})


for(var i = 0; i<squares.length;i++)
{
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function(){	

		var clickedColor = this.style.background;	

		if(clickedColor === pickedColor) 
		{
			
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
				
		} 
		
		else {
			messageDisplay.textContent = "Try again";
			this.style.background = "#232323";
		}
		
	});
}

function changeColors(color)
{
	for(var i = 0; i<squares.length;i++)
	{
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function generateRandomColors(num)
{
	var arr = [];

	for(var i = 0; i<num; i++)
	{
		arr.push(randomColor());
	}

	return arr;
}

function randomColor() {
	//pick colors from 0 255
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r +", "+ g +", "+ b +")";
}