/**
 * Duel Fight Game - FINISHED
 Name: Delia Akbari
 Date: 7/9/14
 Assignment: Goal 1 Assignment: Duel1
*/

// self-executing function
(function(){ //starts a function to begin fight

    console.log("FIGHT!!!"); // Consoling that Fight begins

    //player name
    var playerOneName = "Kabal"; //Player one's name is Kabal
    var playerTwoName = "Kratos"; //Player two's name is Kratos

    //player damage
    var player1Damage = 20; // Player 1's damage number
    var player2Damage = 20; //Player 2's damage number

    //player health
    var playerOneHealth = 100; //Player 1's health starts at 100
    var playerTwoHealth = 100; //Player 2's health starts at 100

    //initiate round
    var round=0; //Represents what round number it's in.

    function fight(){ //starts fight function
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth); //alerts to start game with beginning of players health
        for (var i = 0; i < 10; i++) 	//if i is less than 10 -rounds- then it executes the code below. this is a loop
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min); //formula for random number
            var minDamage1 = player1Damage * .5; //multiplies the damage
            var minDamage2 = player2Damage * .5; //multiplies the damage
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1); //formula for random number
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2); //formula for random number

            //inflict damage
            playerOneHealth-=f1; //minuses damage
            playerTwoHealth-=f2; //minuses damage

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth); //Console logs players names and healths each round

            //check for victor
            var result = winnerCheck(); //checks to see if there is a winner
            console.log(result); //console logs the result
            if (result==="no winner") //if there is no winner then..
            {
                round++; //increase round variable by 1, adds 1 to round
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth); //Shows round number and saying that it is over with player health

            } else{ //if winner or both players lose..
                alert(result); //one of players wins or both of them die. shows result
                break;   //breaks out of loop to display outcome
            };

          };
    };

    function winnerCheck(){ 			//checks to see if there is a winner or not
        var result="no winner";                //if no winner, it displays "no winner"
        if (playerOneHealth<1 && playerTwoHealth<1) //if players health is lower than 1, there is no winner
        {
            result = "You Both Die";           //Alerts that both players are dead if both health is lower than 1
        } else if(playerOneHealth<1){          //If player 1's heath is lower than 1, player 2 wins
            result =playerTwoName+" WINS!!!"   //result that player two wins
        } else if (playerTwoHealth<1)         //if player 2's health is lower than 1, player 1 wins the game
        {
            result = playerOneName+" WINS!!!" //player one wins the game 
        };
       return result;
    };

    /*******  The program gets started below *******/
    fight(); //this is where the program begins, runs above code

})();