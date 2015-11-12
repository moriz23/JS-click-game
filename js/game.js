var table = document.getElementById('game-table');
var startButton = document.getElementById('start-button');
var counter = 0;
var alreadyClicked = [];

// must set timer and bind event to start button

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
	console.log('count: ' + counter);
}


startButton.addEventListener('click', startGame);

// timeout-test

function startGame(){
	table.addEventListener('click', clickFriend);
	startButton.removeEventListener('click', startGame);

	setTimeout(function(){
		table.removeEventListener('click', clickFriend);
		console.log('you done, fool!');
	}, 20000)
}