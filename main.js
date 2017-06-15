function mySkills() {
	"use strict";
	
	var webSkills = ["javascript", "bootstrap", "css", "html", "dreamweaver"],
	    learning = ["react.js", "angular.js", "full stack development"];

	console.log("----------Matthew Sampson's Skills----------" + '\n');

	for (var i = 0; i < learning.length; i++) {
		webSkills.push(learning[i]);
	}

	for (var i = 0; i < webSkills.length; i++) {
		if (webSkills.length - learning.length === i) {
			console.log(">>>>>>>>>>Upcoming Skills<<<<<<<<<<" + '\n' + webSkills[i]);
		} else {
	  		console.log(webSkills[i] + '\n');
		}
	}
}