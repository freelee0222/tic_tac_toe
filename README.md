# Tic Tac Toe

## Hi there! This is our Tic-Tac-Toe game. This is for anyone that likes games. We're very excited to have you here. Tic-Tac-Toe is a really fun game, and we've made it so you can play it on your computer.

It's a game where you put X's and O's in a box. You have to try to get three of your marks in a line. It might sound easy, but it's actually pretty hard!

Whether you've played before or you're totally new, we've made this game for everyone to enjoy. So, let's jump in and have some fun playing Tic-Tac-Toe together!
We hope you have fun!

***
Tic-tac-toe is a game for two people, X and O, who take turns marking the spaces in a 3x3 box of boxes. The player who is the first to place three of their marks in a line, either up and down, or side to side, beats the other player.

>*The following example game is won by the first player, **X***:
<div style="text-align: center;">
<img src="./public/Tic-tac-toe-game.png"
    alt="Tic-Tac-Toe Image"/>
</div>

***

## Set up:

Get what you need for the game to work.
```bash
npm install
``` 
Start the server
```bash
npm start
```

Go to http://localhost:3000 to play Tic Tac Toe.

***

## How to Play

* Simply click a box to pick it. 
* Click "Auto Move" to have the computer make the next move.
* No box may be picked two times.
* Three in a line, and it's over.
* Click "Reset" to play again.

### The Plan

A player can play a perfect game of tic-tac-toe (to beat the other player or, at least, tie) if they pick the first move they can do from the following:

* **Beat the other player**: Place your mark to put three marks in a line.

* **Block**: Stop the other player from beating you by placing your mark.

* **Two Chances**: Set up two chances to beat the other player.

* **Blocking the other player trying two chances**: Stop the other player from setting up a move that will beat you.

* **Middle**: If it has not been picked yet, place your mark in the middle.

* **Other corner**: If the other player is in the corner, the player plays the other corner.

* **Empty corner**: Place your mark in a corner box.

* **Empty side**: Place your mark in a middle box on any of the four sides.

***

*Check out this <a href="https://www.instructables.com/Winning-tic-tac-toe-strategies/">other plan</a> to learn more*