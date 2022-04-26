let player1Score=0;
let player2Score=0;

let player1Health=100;
let player2Health =100;

let rounds=0;

function shootBtn(){

    let player1shooting =  Math.floor(Math.random() * 20);
    let player2shooting =  Math.floor(Math.random() * 20);
    
    console.log(`Damage done by player 1 : ${player1shooting} 
    Damage done by player 2 : ${player2shooting}`);
    
    document.getElementById("playeronescore").innerHTML=player1shooting;
    
    localStorage.setItem("player1Score","playeronescore");
    document.getElementById("playertwoscore").innerHTML=player2shooting;
    
    player1Health-=player2shooting;
    player2Health-=player1shooting;
    
    console.log(`Player 1 Health : ${player1Health}
    Player 2 Health : ${player2Health}`);
    
      if(player1Health<=0){
        document.getElementById("scores-9").innerHTML = "Player 2 Wins";
      }
      else if(player2Health<=0){
        document.getElementById("scores-9").innerHTML = "Player 1 Wins";
      }
    rounds++;
    
    if(rounds==5){
        alert("Game over")
        if (confirm("would you like to Restart") == true) {
            text = "You pressed OK!";
            location.reload();
          } else {
            text = "You canceled the came!";
          }
    }

      if(player1shooting>player2shooting){
        player1Score+= 1;
      }
      else{
        player2Score+= 1;
      }
      console.log(`Player 1 Wins : ${player1Score} 
   Player 2 Wins : ${player2Score}`)
      document.getElementById("scores-4").innerHTML=player1Score;
      document.getElementById("scores-8").innerHTML=player2Score;

      if(player1Score==3){
        finished("Player 1 Wins!")
      }
      else if(player2Score==3){
        finished("Player 2 Wins!")
      }
   
     if(rounds==5){
        let result = player1Score===player2Score ? "Tied" : player1Score>player2Score ? "Player 1 Wins" : "Player 2 Wins";
        console.log(result);    
     } 
}

function finished(gameresult){
  document.getElementById("scores-9").innerHTML = gameresult;
  alert("Game over")
  if (confirm("would you like to Restart") == true) {
      text = "You pressed OK!";
      location.reload();
    } else {
      text = "You canceled the game!";
    }
    console.log(text);
}

function resetBtn(){
    location.reload();
    localStorage.clear();
}