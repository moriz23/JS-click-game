var table = document.getElementById('game-table');
var startButton = document.getElementById('start-button');
var counter = 0;
var alreadyClicked = [];


// click function

function clickFriend(e){

	var clicked = e.target.id;
	var alreadyLength = alreadyClicked.length;

	if(alreadyLength == 0){
		alreadyClicked.push(clicked);
		counter++;
	}else if(alreadyLength > 0){
		for(var i=0; i<=alreadyLength; i++){
			if(alreadyClicked[i] == clicked){
				console.log('already cliked');
				return false;
			}
		}
		alreadyClicked.push(clicked);
		counter++;
	}

	console.log(alreadyClicked);
}

startButton.addEventListener('click', startGame);

// start game and set time

function startGame(){
	table.addEventListener('click', clickFriend);
	startButton.className = "poof";

	setTimeout(function(){
		table.removeEventListener('click', clickFriend);
		// call results function here
		finalResult();
	}, 20000)
}

// results function
function finalResult(){
	var finalCount = document.getElementById('final');
	var msgArea = document.createElement('p');

	finalCount.appendChild(msgArea);

	if(counter === 0){
		msgArea.textContent = "You clicked " + counter + " out of the 20 pictures.  You either passed out or you have no fingers.";
	}else if(counter >0 && counter <= 5){
		msgArea.textContent = msgArea.textContent = "You clicked " + counter + " out of the 20 pictures.  Drunk, you have to be drunk...";
	}else if(counter >5 && counter <= 10){
		msgArea.textContent = "You clicked " + counter + " out of the 20 pictures.  You're still on the bottom part of the clicking bell curve.";
	}else if(counter >10 && counter <=15){
		msgArea.textContent = "You clicked " + counter + " out of the 20 pictures. You're getting there.  Don't get cocky, kid.";
	}else if(counter > 15 && counter <20){
		msgArea.textContent = "You clicked " + counter + " out of the 20 pictures. You're well on your way to becoming a click-master.";
	}else if(counter === 20){
		msgArea.textContent = "You clicked " + counter + " out of the 20 pictures. You're a true click-master.  Your iron finger probably breaks mice in weeks.  They will write legends about you, or at least you'll be mentioned in the footnote of a blog somewhere.";
	}

	finalCount.className += "appear";
	msgArea.className = "final-results";
}