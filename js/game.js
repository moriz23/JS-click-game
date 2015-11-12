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
}

startButton.addEventListener('click', startGame);

// start game and set time

function startGame(){
	table.addEventListener('click', clickFriend);
	startButton.removeEventListener('click', startGame);

	setTimeout(function(){
		table.removeEventListener('click', clickFriend);
		console.log('you done, fool!');
		// call results function here
	}, 20000)
}

// results function