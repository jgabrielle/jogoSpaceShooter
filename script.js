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

//funcao de subir
function moveUp(){
	let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
	if(topPosition === "5px"){
		return
	} else{
		let position = parseInt(topPosition);
		position -= 50;
		yourShip.style.top = `${position}px`;
	}
}

//funcao de descer
function moveDown(){
	let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
	if(topPosition === "605px"){
		return
	} else{
		let position = parseInt(topPosition);
		position += 50;
		yourShip.style.top = `${position}px`;
	}
}

window.addEventListener('keydown', flyAhip);