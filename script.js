const yourShip = document.querySelector('.player-shooter');
const playArea = document.querySelector('#main-play-game');

//movimento e tiro da nave
function flyAhip (event){

	if(event.key === 'ArrowUp'){
		event.preventDefault();
		moveUp();
	} else if(event.key === 'ArrowDown'){
		event.preventDefault();
		moveDown();
	} else if(event.key === " "){
		event.preventDefault();
		fireLaser();
	}

}

