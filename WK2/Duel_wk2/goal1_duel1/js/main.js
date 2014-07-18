/**
 * Duel Fight Game - FINISHED
 Name: Delia Akbari
 Date: 7/9/14
 Assignment: Goal 1 Assignment: Duel1
*/

// self-executing function
(function(){ //starts a function to begin fight

    console.log("FIGHT!!!"); // Consoling that Fight begins
	var kabal=fighter1(name, damage, health);
	var kratos=fighter2(name, damage, health);
    //player name
	var fighter1 = ["Kabal", 20,100];//Player one's name is Kabal, damage is 20, health starts at 100
	var fighter2 = ["kratos", 20,100];//Player two's name is Kratos, damage is 20, health starts at 100
	

    //initiate round
    var round=0; //Represents what round number it's in.
	

    function fight(){ //starts fight function
        alert(kabal[0]+":"+kabal[2]+"  *START*  "+fighter2[0]+":"+fighter2[2]); //alerts to start game with beginning of players health
        for (var i = 0; i < 10; i++) 	//if i is less than 10 -rounds- then it executes the code below. this is a loop
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min); //formula for random number
            var minDamage1 = kabal[1] * .5; //multiplies the damage
            var minDamage2 = fighter2[1] * .5; //multiplies the damage
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