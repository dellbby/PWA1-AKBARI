/**
 * Duel Fight Game - FINISHED
 Name: Delia Akbari
 Date: 7/22/14 
Assignment: Duel pt 3
*/

// self-executing function
(function(){ //starts a function to begin fight

    console.log("FIGHT!!!"); // Consoling that Fight begins
	
	//DEFINING DOM PIECES
	var fighter1_txt = document.querySelector("#kabal").querySelector("p"); //Don't need # if using Getelementbyid
	var fighter2_txt = document.querySelector("#kratos").querySelector("p"); //Dont need # sign if using queryselector
	var round_txt = document.querySelector("h5"); //pull txt between h4 or h5 tag
	var button = document.getElementById("fight_btn"); //pull main button "start" button
	console.log()
	
	//SETUP Click event
	button.addEventListener("click", fight, false); //need event listener
	
	//ARRAY FOR FIGHTERS
	var fighters = [
	{
		name:"kabal", //name of player 1
		damage:20, //damage is 20
		health:100 //health is 100
	},
	{
		name:"kratos", //name of player 2
		damage:20, //damage is 20
		health:100 //health starts at 100
	}];
var round = 1;
	
	//INITIALIZE DOM
	round_txt.innerHTML = "Click FIGHT button to start";
	fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
	fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;
	
	//fight function
	    function fight(){ //starts fight function
		fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
		fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;
			//damage
			var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage *.5);
			var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage *.5);
			
			//inflict damage
			fighters[0].health -= f1;
			fighters[1].health -= f2;
			
			console.log(fighters[0].health, fighters[1].health);
			
			//winner?
			var result = winnerCheck();
			console.log(result); //will display if winner
			
			round_txt.innerHTML = "ROUND #" + round+ "Results:";
			round++;
			if (result === "no winner")
			{
				fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
				fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;
				
			}else{
				fighter1_txt.innerHTML = result;
				fighter2_txt.innerHTML = "";
				
				//disable button - need below if using addevent listener
				button.removeEventListener("click",fight, false);
				//button disables = true;
				//button.onclick = return false";
				
				document.querySelector('.buttonblue').innerHTML = 'DONE!!';
			}
		}
		function winnerCheck() {
			var result = "no winner";
			if (fighters[0].health < 1 && fighters[1].health <1)
			{
				result = "You both die - Game OVER";
			} else if(fighters[0].health < 1){
				result = fighters[1].name + "Wins!!!"
			} else if (fighters[1].health < 1)
			{
				result = fighters[0].name + "WINS!"
			}
			return result;
		}
})();