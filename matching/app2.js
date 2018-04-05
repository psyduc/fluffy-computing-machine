//need an array for the colors
var matching_array = ['red','red','orange','orange','yellow','yellow','green','green','blue','blue','purple','purple'];
var cardsFlipped = 0;
var colorArray = [];

//need a function to shuffle the array (fisher-yates method)
function array_shuffle(array) {
	var x = array.length, y, z;
	while(--x) {
		y = Math.floor(Math.random() * (x + 1));
		z = array[x];
		array[x] = array[y];
		array[y] = z;
	}
	return array;
}

//need a function to distribuite the elements of the array to each card
function newBoard() {
	array_shuffle(matching_array);
	console.log(matching_array);
	for(var i = 0; i < matching_array.length; i++) {
		var currentCard = document.getElementById('card' + i);
		console.log(currentCard);
		currentCard.style.background === '';
		currentCard.classList.add(matching_array[i]);
	}
}

//flip function
	//need a color tracker array
	//need a variable to keep track of how many cards are flipped
	//two cases: colortracker length equals 0 or 1
	//if colortracker.length === 0
		//add the color to colortracker
	//if colortracker.length === 1
		//add color to colortracker
		//two cases: the two values either match or not
		//if they dont match
			//reset the color tracker array
			//flip the both cards back
		//if they do match
			//add two to the cardflipped
			//if cardlipped length === colorarray length
				//winner	
function flipCard(card) {
	var color = card.className.split(' ')[0];
	if (card.style.background === color){
	} else {
		if(colorArray.length === 0) {
		card.classList.add('active');
		card.style.background = color;
		colorArray.push(color);
		console.log(colorArray);
		} else /*colorarray.length === 1*/{
			card.classList.add('active');
			card.style.background = color;
			colorArray.push(color);
			console.log(colorArray);
			if(colorArray[0] != colorArray[1]) {
				setTimeout("flipback()",1000);
				setTimeout("removeActive()",1000);
				colorArray = [];
			} else /*the colors in the array are they same*/{
				//remove active class
				colorArray = [];
				removeActive();
				cardsFlipped += 2;
			}
		}
	}
	if (cardsFlipped === matching_array.length) {
		alert('Congrats you finished');
	}
}


function flipback() {
	card1 = document.getElementsByClassName('active');
	cardA = card1[0];
	cardB = card1[1];
	//set background back to nothing
	cardA.style.background = '';
	cardB.style.background = '';
}

function removeActive() {
	cardList = document.getElementsByClassName('active');
	cardA = cardList[0];
	cardB = cardList[1];
	cardA.classList.remove('active');
	cardB.classList.remove('active');
}