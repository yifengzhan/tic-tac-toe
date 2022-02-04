click to play https://yifengzhan.github.io/tic-tac-toe/
<br />
<br />
<br />

# JavaScript Tic Tac Toe
Tic Tac Toe is a game in which two players seek in alternate turns to complete a row, a column, or a diagonal with either three O's or three X's drawn in the spaces of a grid of nine squares; noughts and crosses.
<br />

This project was built by a coding bootcamp student on Javascript, Html, and CSS, users could play this game on a web browser.

<br />
<br />
<br />

## Approach to the problem 


1)First, we tried to create a simple function that allows the browser to respond to the user's interaction, which is the mouse click. 

<br />
<br />
<br />

2)Create a variable to assign which area the computer should be listening to for use’s ‘click’.

function clickListener(event){
   var clickedBox = event.target
   if (clickedBox.className.toLocaleLowerCase() === 'cell'){

<br />
<br />
<br />
3) Set variable toggle = true at the beginning to allow player 1 to play first, player 1 uses the “x” marking.  (set  toggle = false if user wishes to let player 2 go first, who uses the marking “o”)


<br />
<br />
<br />
4) After a user's click, textContent in the clicked cell will be marked with “x” or “o”, the class of the clicked cell would be changed to “cell-clicked”.

clickedBox.textContent = player1
           clickedBox.classList = 'cell-clicked'


<br />
<br />
<br />
5) Then the toggle changed from “true” to “false” to allow the next player to make a different marking. ( or from “false” to “true”)

<br />
<br />
<br />
<br />
6) Above steps repeat till we have a result of “win”, “lose'', or “draw”. 
Once we have a result, it will be displayed below the main board and no further move could be made by the users.

if (id0 === "x" && id1 === "x" && id2 === "x"){
       clickBox.removeEventListener('click', clickListener)
       result.textContent = "Player X Won!"


<br />
<br />
<br />
7) All possible winning conditions for both winners are manually set in the algorithm, 

if (id0 === "x" && id1 === "x" && id2 === "x"){...
} else if (id3==="x" && id4 ==="x" && id5 === "x"){...



<br />
<br />
<br />
8) if none of these conditions are met and all cells have their classNames changed to “cell-clicked”, it is then understood the game has finished and the result is a draw. A message of “It’s a draw, try again!” would be shown below the main board.

 if (document.querySelectorAll('.cell-clicked').length == 9 && haveWinner !== true){
       result.textContent="It's a draw, try again!"
   }

<br />
<br />
<br />





## Cool tech used

It is the first time for the developer to create a Javascript project, so he thinks it’s pretty cool for himself. 

<br />
<br />
<br />






## Lessons learnt
1, save the file<br />
2, indentation <br />
3, save the working file separately before trying something new


<br />
<br />
<br />




## Future features
1, choose player 1 or player 2 to go first <br />
2, implement simple animation for winning

<br />
<br />
<br />
