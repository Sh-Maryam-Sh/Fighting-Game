/* 
🌟 APP: Fighting Game

Create an updateGame() function that will update the DOM with the state of the game 👇
========================================

- updateGame()

These are the 2 classes you must create and their methods 👇
========================================

class Player {
  - strike()
  - heal()
}

class Game {
  - play()
  - checkIsOver()
  - declareWinner()
  - reset()
}

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'play' = Button to run simulation
#2 ID 👉 'result' = Div that holds the winner of the match
#3 ID 👉 'p1Health' = Div that holds player 1's health
#4 ID 👉 'p2Health' = Div that holds player 2's health
*/

// ** Grabs elements from the DOM and stores them into variables **
let playButton = document.getElementById('play')
let resultDiv = document.getElementById('result')
let p1HealthDiv = document.getElementById('p1Health')
let p2HealthDiv = document.getElementById('p2Health')
let p1NameDiv =document.getElementById('p1Name')
let p2NameDiv = document.getElementById('p2Name')

// ** Check if either players health is  0 and if it is, then update isOver to true **
const updateGame = (p1,p2,p1HealthDiv,p2HealthDiv, gameState) => {
  // Update the DOM with the latest health of players
  p1NameDiv.innerText = p1.name
  p2NameDiv.innerText = p2.name
  p1HealthDiv.innerText = p1.health
  p2HealthDiv.innerText = p2.health
  if(p1.health <= 0 || p2.health <= 0)
  {
    game.isOver = true
    gameState = game.isOver
    resultDiv.innerText = game.declareWinner(game.isOver,p1,p2)
    return gameState

  }
  
}

// ** Create the Player class which can create a player with all it's attributes and methods **
// qazi = Player('Qazi', 100, 7)
// qazi.name 👉 'Qazi'
// qazi.health 👉 100
// qazi.attackDmg 👉 7
class player{
  constructor(name,health,attackDmg){
    this.name = name
    this.health = health
    this.attackDmg = attackDmg

  }
   // ** Attack an enemy with a random number from 0 to YOUR attackDmg bonus **
   strike (player, enemy, attackDmg) {
    
    // Get random number between 1 - 10 and that is damageAmount
    let damageAmount = Math.ceil(Math.random() * attackDmg )

    // Subtract the enemy health with the damageAmount
    enemy.health -= damageAmount

    //  Update the game and DOM with updateGame()
    updateGame(player,enemy,game.isOver)

    //  Return a message of 'player name attacks enemy name for damageAmount'
    return `${player.name} attacks ${enemy.name} for ${damageAmount} damage!`

  }
   // ** Heal the player for random number from  1 to 5 **
   heal (player) {
    
    // Get random number between 1 - 5 and store that in hpAmount
    let hpAmount = Math.ceil(Math.random() * 5 )

    // Add hpAmount to players health
    player.health += hpAmount

    //  Update the game and DOM with updateGame()
    updateGame(player,p2,game.isOver)

    //  Return a message of 'player name heals for hpAmount HP'
    return `${player.name} heals for ${hpAmount} HP!`

  }
}
 

 
 

 

// ** Create the Game class with all it's attributes and methods to run a match **
class Game {
  constructor(){
    this.isOver = false
  }
}

  // ** If the game is over and a player has 0 health declare the winner! **


  // ** Reset the players health back to it's original state and isOver to FALSE **

  
  // ** Simulates the whole match untill one player runs out of health **
 
    // Make sure the players take turns untill isOver is TRUE
  
    // Once isOver is TRUE run the declareWinner() method 
   



// ** Create 2 players using the player class **
let player1 = new player('Qazi',100,10)
let player2 = new player('lance',100,10)

// ** Save original Player Data **
let p1 = player1
let p2 = player2

// ** Create the game object from the Game class **
let game = new Game()
// ** Initialize the game by calling updateGame() **
updateGame(p1,p2,game.isOver)

// ** Save original Game Data **



// ** Add a click listener to the simulate button that runs the play() method on click and pass in the players **



// ** BONUS **
// Add functionality where players can press a button to attack OR heal

// ** Player 1 Controls **




// ** Player 2 Controls **



console.log(p1.heal(p1))

