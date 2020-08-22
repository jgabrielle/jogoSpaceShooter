const yourShip = document.querySelector('.player-shooter');
const playArea = document.querySelector('#main-play-area');

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

//funcao atirar
function fireLaser(){
	let laser = createLaserElement();
	playArea.appendChild(laser);
	moveLaser(laser);
}

//funcao criar posicao laser
function createLaserElement(){
	let xPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('left'));
	let yPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('top'));
	let newLaser = document.createElement('img');
	newLaser.scr = 'img/shoot.png';
	newLaser.classList.add('laser');
	newLaser.style.left = `${xPosition}px`;
	newLaser.style.top = `${yPosition-10}px`;
	return newLaser;
}

//funcaode movimentar o laser
function moveLaser(laser){
	let laserInterval = setInterval(()=>{
		let xPosition = parseInt(laser.style.left);

		if (xPosition === 400) {
			laser.remove();
		} else {
			laser.style.left = `${xPosition+8}px`;
		}

	},10)
}


window.addEventListener('keydown', flyAhip);