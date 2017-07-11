var skillsBtn = document.querySelector("#skills_btn"),
	skillIcons = document.querySelectorAll(".skill_icon"),
	skillText = document.querySelectorAll(".skill_text");

init();

function moveSkillIcons(){
	for(var i = 0; i < skillIcons.length; i++){
		if(i % 2 === 0){
			skillIcons[i].classList.add("move_left");
			
		} else {
			skillIcons[i].classList.add("move_right");
		}
	}
}

function initializeSkillIcons(){
	for(var i = 0; i < skillIcons.length; i++){
		// Alternates the spacecraft's facing direction
		if(i % 2 === 0){
			skillIcons[i].style.backgroundImage = "url('images/spacecraft_left.png')";
		}
		skillIcons[i].style.display = "none";
	}
	
	styleIconText();
}

function styleIconText(){
	// Assign particular CSS properties to each skill icon to center its content text.
	// Css
	skillText[0].style.padding = "17px 30px";
	// Bootstrap
	// HTML
	skillText[2].style.padding = "17px 30px";
	// JavaScript
	// Github
	skillText[4].style.padding = "17px 20px";
	// Dreamweaver
	skillText[5].style.fontSize = "0.8em";
	skillText[5].style.padding = "19px 0 0 20px";
	// NPM
	skillText[6].style.padding = "19px 15px 0 0";
}

function showSkillsIcons(){
	for(var i = 0; i < skillIcons.length; i++){
		skillIcons[i].style.display = "block";
	}
}

function init(){
	initializeSkillIcons();
	skillsBtn.addEventListener("click", function(){
		// Populate field
		showSkillsIcons();
		// Move icons
		setTimeout(moveSkillIcons, 1);
	});
}