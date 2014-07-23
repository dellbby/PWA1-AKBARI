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
	button.addEventListener("click", fight,false); //need event listener
	
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
	


        alert(kabal[0]+":"+kabal[2]+"  *START*  "+kratos[0]+":"+kratos[2]); //alerts to start game with beginning of players health
        for (var i = 0; i < 10; i++) 	//if i is less than 10 -rounds- then it executes the code below. this is a loop
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min); //formula for random number
            var minDamage1 = kabal[1] * .5; //multiplies the damage
            var minDamage2 = kratos[1] * .5; //multiplies the damage
            var f1 = Math.floor(Math.random()*(kabal[1]-minDamage1)+minDamage1); //formula for random number
            var f2 = Math.floor(Math.random()*(kratos[1]-minDamage2)+minDamage2); //formula for random number

            //inflict damage
            kabal[2]-=f1; //minuses damage
            kratos[2]-=f2; //minuses damage

            console.log(kabal[0]+": "+kabal[2] + " " + kratos[0]+":"+kratos[2]); //Console logs players names and healths each round

            //check for victor
            var result = winnerCheck(); //checks to see if there is a winner
            console.log(result); //console logs the result
            if (result==="no winner") //if there is no winner then..
            {
                round++; //increase round variable by 1, adds 1 to round
                alert(kabal[0]+":"+kabal[2]+"  *ROUND "+round+" OVER"+"*  "+kratos[0]+":"+kratos[2]); //Shows round number and saying that it is over with player health

            } else{ //if winner or both players lose..
                alert(result); //one of players wins or both of them die. shows result
                break;   //breaks out of loop to display outcome
            };

          };
    };

    function winnerCheck(){ 			//checks to see if there is a winner or not
        var result="no winner";                //if no winner, it displays "no winner"
        if (kabal[2]<1 && kratos[2]<1) //if players health is lower than 1, there is no winner
        {
            result = "You Both Die";           //Alerts that both players are dead if both health is lower than 1
        } else if(kabal[2]<1){          //If player 1's heath is lower than 1, player 2 wins
            result =kratos[0]+" WINS!!!"   //result that player two wins
        } else if (kratos[2]<1)         //if player 2's health is lower than 1, player 1 wins the game
        {
            result = kabal[0]+" WINS!!!" //player one wins the game 
        };
       return result;
    };

    /*******  The program gets started below *******/
    fight(); //this is where the program begins, runs above code

})();