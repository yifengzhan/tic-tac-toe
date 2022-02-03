
var toggle = true
var player1 = "x"
var player2 = "o"
var player1Score = 0
var player2Score = 0




var result = document.querySelector("#winMessage")
var haveWinner = false

var clickBox = document.querySelector('.board')
function clickListener(event){
    var clickedBox = event.target
    if (clickedBox.className.toLocaleLowerCase() === 'cell'){
        if (toggle == true){
            clickedBox.textContent = player1
            clickedBox.classList = 'cell-clicked'
            toggle = false
           
        } else {
            clickedBox.textContent =player2
            clickedBox.classList = 'cell-clicked'
            toggle = true
        }
    }

    var id0 = document.querySelector("#cell-0").textContent
    var id1 = document.querySelector("#cell-1").textContent
    var id2 = document.querySelector("#cell-2").textContent
    var id3 = document.querySelector("#cell-3").textContent
    var id4 = document.querySelector("#cell-4").textContent
    var id5 = document.querySelector("#cell-5").textContent
    var id6 = document.querySelector("#cell-6").textContent
    var id7 = document.querySelector("#cell-7").textContent
    var id8 = document.querySelector("#cell-8").textContent

   
    if (id0 === "x" && id1 === "x" && id2 === "x"){
        clickBox.removeEventListener('click', clickListener)
        result.textContent = "Player X Won!"
        haveWinner=true
        document.querySelector('.player-x-score').innerHTML = player1Score + 1
    } else if (id3==="x" && id4 ==="x" && id5 === "x"){
        clickBox.removeEventListener('click', clickListener)
        result.textContent= "Player X Won!"
        haveWinner=true
        document.querySelector('.player-x-score').innerHTML = player1Score + 1
    } else if (id6==="x" && id7 ==="x" && id8 === "x"){
        clickBox.removeEventListener('click', clickListener)
        result.textContent= "Player X Won!"
        haveWinner=true
        document.querySelector('.player-x-score').innerHTML = player1Score + 1
    } else if (id0==="x" && id3 ==="x" && id6 === "x"){
        clickBox.removeEventListener('click', clickListener)
        result.textContent= "Player X Won!"
        haveWinner=true
        document.querySelector('.player-x-score').innerHTML = player1Score + 1
    } else if (id1==="x" && id4 ==="x" && id7 === "x"){
        clickBox.removeEventListener('click', clickListener)
        result.textContent= "Player X Won!"
        haveWinner=true
        document.querySelector('.player-x-score').innerHTML = player1Score + 1
    } else if (id2==="x" && id5 ==="x" && id8 === "x"){
        clickBox.removeEventListener('click', clickListener)
        result.textContent= "Player X Won!"
        haveWinner=true
        document.querySelector('.player-x-score').innerHTML = player1Score + 1
    } else if (id0==="x" && id4 ==="x" && id8 === "x"){
        clickBox.removeEventListener('click', clickListener)
        result.textContent= "Player X Won!"
        haveWinner=true
        document.querySelector('.player-x-score').innerHTML = player1Score + 1
    } else if (id2==="x" && id4 ==="x" && id6 === "x"){
        clickBox.removeEventListener('click', clickListener)
        result.textContent= "Player X Won!"
        haveWinner=true
        document.querySelector('.player-x-score').innerHTML = player1Score + 1


    } else if (id0==="o" && id1 ==="o" && id2 === "o"){
        clickBox.removeEventListener('click', clickListener)
        result.textContent= "Player O won!"
        haveWinner=true
        document.querySelector('.player-o-score').innerHTML = player2Score + 1
    } else if (id3==="o" && id4 ==="o" && id5 === "o"){
        clickBox.removeEventListener('click', clickListener)
        result.textContent= "Player O won!"
        haveWinner=true
        document.querySelector('.player-o-score').innerHTML = player2Score + 1
    } else if (id6==="o" && id7 ==="o" && id8 === "o"){
        clickBox.removeEventListener('click', clickListener)
        result.textContent= "Player O won!"
        haveWinner=true
        document.querySelector('.player-o-score').innerHTML = player2Score + 1
    } else if (id0==="o" && id3 ==="o" && id6 === "o"){
        clickBox.removeEventListener('click', clickListener)
        result.textContent= "Player O won!"
        haveWinner=true
        document.querySelector('.player-o-score').innerHTML = player2Score + 1
    } else if (id1==="o" && id4 ==="o" && id7 === "o"){
        clickBox.removeEventListener('click', clickListener)
        result.textContent= "Player O won!"
        haveWinner=true
        document.querySelector('.player-o-score').innerHTML = player2Score + 1
    } else if (id2==="o" && id5 ==="o" && id8 === "o"){
        clickBox.removeEventListener('click', clickListener)
        result.textContent= "Player O won!"
        haveWinner=true
        document.querySelector('.player-o-score').innerHTML = player2Score + 1
    } else if (id0==="o" && id4 ==="o" && id8 === "o"){
        clickBox.removeEventListener('click', clickListener)
        result.textContent= "Player O won!"
        haveWinner=true
        document.querySelector('.player-o-score').innerHTML = player2Score + 1
    } else if (id2==="o" && id4 ==="o" && id6 === "o"){
        clickBox.removeEventListener('click', clickListener)
        result.textContent= "Player O won!"
        haveWinner=true
        document.querySelector('.player-o-score').innerHTML = player2Score + 1
    } 


    if (document.querySelectorAll('.cell-clicked').length == 9 && haveWinner !== true){
        result.textContent="It's a draw, try again!"
    }
    
}


clickBox.addEventListener('click',clickListener)



var restartBtn = document.querySelector(".restart-btn")
restartBtn.addEventListener('click', function(){
   
document.querySelector('#cell-0').className = "cell"
document.querySelector('#cell-0').textContent=""

document.querySelector('#cell-1').className = "cell"
document.querySelector('#cell-1').textContent=""

document.querySelector('#cell-2').className = "cell"
document.querySelector('#cell-2').textContent=""

document.querySelector('#cell-3').className = "cell"
document.querySelector('#cell-3').textContent=""

document.querySelector('#cell-4').className = "cell"
document.querySelector('#cell-4').textContent=""

document.querySelector('#cell-5').className = "cell"
document.querySelector('#cell-5').textContent=""

document.querySelector('#cell-6').className = "cell"
document.querySelector('#cell-6').textContent=""

document.querySelector('#cell-7').className = "cell"
document.querySelector('#cell-7').textContent=""

document.querySelector('#cell-8').className = "cell"
document.querySelector('#cell-8').textContent=""
})

















// var restartBtn = document.querySelector(".restart-btn")
// restartBtn.addEventListener('click', function(){
//     console.log('asdf')
// document.querySelector('#cell-0').className = "cell"
// document.querySelector('#cell-1').className = "cell"
// document.querySelector('#cell-2').className = "cell"
// document.querySelector('#cell-3').className = "cell"
// document.querySelector('#cell-4').className = "cell"
// document.querySelector('#cell-5').className = "cell"
// document.querySelector('#cell-6').className = "cell"
// document.querySelector('#cell-7').className = "cell"
// document.querySelector('#cell-8').className = "cell"
// })













// function restart(){
//     for(i=0; i<10;i++){
//         document.querySelector(".cell-clicked").textContent = ""
//     }
// }


// function restart(){
//     document.querySelectorAll('.cell-clicked').textContent=""
// }





// const refreshButton = document.querySelector('.refresh-button');

// const refreshPage = () => {
//   location.reload();
// }

// refreshButton.addEventListener('click', refreshPage)







// document.querySelector('.restart-btn').addEventListener('click',restart)


// const reloadtButton = document.querySelector("#reload");
// function reload() {
//     reload = location.reload();
// }
// reloadButton.addEventListener("click", reload, false);










// if (id0 && id1 && id2 || id3 && id4 && id5 || id6 && id7 && id8 || id0 && id3 && id6 || id1 && id4 && id7 || id2 && id5 && id8 ||id0 && id4 && id8 || id2 && id4 && id6 === "x"){
// result.textContent="You Won!"}




// if (checkAllCell == 8){ 
//     result.textContent="It's a draw!"
// }



// if (id0 && id1 && id2 === "x"){
//     result.textContent="You Won!"
//     } else if (id3 && id4 && id5 === "x"){
//         result.textContent="You Won!"
//     } else if (id6 && id7 && id8 === "x"){
//         result.textContent="You Won!"
//     } else if (id0 && id3 && id6 === "x"){
//         result.textContent="You Won!"
//     } else if (id1 && id4 && id7 === "x"){
//         result.textContent="You Won!"
//     } else if (id2 && id5 && id8 === "x"){
//         result.textContent="You Won!"
//     } else if (id0 && id4 && id8 === "x"){
//         result.textContent="You Won!"
//     } else if (id2 && id4 && id6 === "x"){
//         result.textContent="You Won!"
//     } 









    
// if (document.getElementById('0').textContent == "x" &&
// document.getElementById('1').textContent == "x" &&
// document.getElementById('2').textContent == "x"
// ){document.querySelector('#winMessage').textContent="You Won!"
// } 


 













// function makeMarkX(event) {
//     var cellClicked = event.target
//     if (cellClicked.className.toLocaleLowerCase() === 'cell'){
//         cellClicked.textContent = "x"

//     }
// }

// function makeMarkO(event) {
//     var cellClicked = event.target
//     cellClicked.textContent = "o"
// }


// var playerClick = document.querySelector('.board')
// playerClick.addEventListener('click',makeMarkX)













// function makeMark(event) {
//     var cellClicked = event.target
//     if (cellClicked.className == 'cell'){
//         cellClicked.textContent = "x"
//     }
// }


// if (playerClick.className.toLocaleLowerCase() === 'cell'){
    
    // if (toggle == true){ 
    //     playerClick.addEventListener('click', makeMarkX)
    // }
// }

// console.log (playerClick.className.toLocaleLowerCase())

// console.log(playerClick.tagName)





















// if it has not been clicked, put current player's marking on the box 
// if there is an winning condition (win/loose /draw?)
// if any condition met, end the game, give a message " you have....the game"




// if winning conditon not met, change to palyer 2 
// repeat line 9-13 







// if (document.getElementById('0').textContent == "x" &&
// document.getElementById('1').textContent == "x" &&
// document.getElementById('2').textContent == "x"
// ){document.querySelector('#winMessage').textContent="You Won!"
// } 


// if (id0 === "x" && id1 === "x" && id2 === "x"){
//     result.textContent = "Player X Won!"
//     haveWinner=true
// } else if (id3==="x" && id4 ==="x" && id5 === "x"){
//     result.textContent= "Player X Won!"
//     haveWinner=true
// } else if (id6==="x" && id7 ==="x" && id8 === "x"){
//     result.textContent= "Player X Won!"
//     haveWinner=true
// } else if (id0==="x" && id3 ==="x" && id6 === "x"){
//     result.textContent= "Player X Won!"
//     haveWinner=true
// } else if (id1==="x" && id4 ==="x" && id7 === "x"){
//     result.textContent= "Player X Won!"
//     haveWinner=true
// } else if (id2==="x" && id5 ==="x" && id8 === "x"){
//     result.textContent= "Player X Won!"
//     haveWinner=true
// } else if (id0==="x" && id4 ==="x" && id8 === "x"){
//     result.textContent= "Player X Won!"
//     haveWinner=true
// } else if (id2==="x" && id4 ==="x" && id6 === "x"){
//     result.textContent= "Player X Won!"
//     haveWinner=true
// } 



// else if (id0==="o" && id1 ==="o" && id2 === "o"){
//     result.textContent= "Player O won!"
//     haveWinner=true
// } else if (id3==="o" && id4 ==="o" && id5 === "o"){
//     result.textContent= "Player O won!"
//     haveWinner=true
// } else if (id6==="o" && id7 ==="o" && id8 === "o"){
//     result.textContent= "Player O won!"
//     haveWinner=true
// } else if (id0==="o" && id3 ==="o" && id6 === "o"){
//     result.textContent= "Player O won!"
//     haveWinner=true
// } else if (id1==="o" && id4 ==="o" && id7 === "o"){
//     result.textContent= "Player O won!"
//     haveWinner=true
// } else if (id2==="o" && id5 ==="o" && id8 === "o"){
//     result.textContent= "Player O won!"
//     haveWinner=true
// } else if (id0==="o" && id4 ==="o" && id8 === "o"){
//     result.textContent= "Player O won!"
//     haveWinner=true
// } else if (id2==="o" && id4 ==="o" && id6 === "o"){
//     result.textContent= "Player O won!"
//     haveWinner=true
// } 


// if (document.querySelectorAll('.cell-clicked').length == 9 && haveWinner !== true){
//     result.textContent="It's a draw, try again!"
// }




// // var win = 0
// // if (result.textContent == "x wins!"){
// //     win += 1
// //     document.querySelector('.player-x-score').textContent = win
// // }

// })