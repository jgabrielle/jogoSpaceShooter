const yourShip = document.querySelector('.player-shooter');
const playArea = document.querySelector('#main-play-area');
const aliensImg = ['img/monster-1.png','img/monster-2.png','img/monster-3.png'];

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
	return newLaser
}

//funcao de movimentar o laser
function moveLaser(laser){
	let laserInterval = setInterval(()=>{
		let xPosition = parseInt(laser.style.left);
		let alien = document.querySelectorAll('.alien');

		aliens.forEach((alien) => { //verificando se cada alien foi atingido
			if(checkLaserCollision(laser,alien)){
				alien.scr = 'img/explosion.png';
				alien.classList.remove('alien');
				alien.classList.add('dead-alien');
			}
		});

		if (xPosition === 340) {
			laser.remove();
		} else {
			laser.style.left = `${xPosition+8}px`;
		}

	},10)
}

//criar monstro aleatorio
function createAliens(){
	let newAlien = document.createElement('img');
	let alienSprite = aliensImg[Math.floor(Math.randon()* aliensImg.lenght)];//sorteio de imagem
	newAlien.scr = alienSprite;
	newAlien.classList.add('alien');
	newAlien.classList.add('alien.transition');
	newAlien.style.left = '370px';
	newAlien.style.top = `${Math.floor(Math.randon()*330)+30}`
	playArea.appendChild(newAlien);
	moveAlien(newAlien);
}

//funcao para movimentar inimigos
function moveAlien(alien){
	let moveAlienInterval = setInterval (() => {
		let xPosition = parseInt(window.getComputedStyle(alien).getPropertyValue('left'));
		if(xPosition <= 50) {
			if(Array.from(alien.classList).includes('dead-alien')){
				alien.remove();
			} /*else {
				gameOver();
			}*/ 
		} else {
				alien.style.left = `${xPosition - 4}px`;
			}
	},30);
}

//funcao para colisao
function checkLaserCollision(laser,alien){
	let laserTop = parseInt(laser.style.top);
	let laserLeft = parseInt(laser.style.left);
	let laserBottom = laserTop-20;
	let alienTop = parseInt(alien.style.top);
	let alienLeft = parseInt(alien.style.left);
	let alienBottom = alienTop-30;
	if (laserLeft != 340 laserLeft + 40 >= alienLeft) {
		if(laserTop<= alienTop && laserTop >= alienBottom){
			return true;
		}
		else{
			return false;
		}
	}
}
window.addEventListener('keydown', flyAhip);
createAliens()