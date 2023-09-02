var card = document.getElementById("cards")
var total = document.getElementById("total")
var message = document.getElementById("message")
var ctotal = document.getElementById("ctotal")


var pcard = []

var csum = 0
var psum = 0

var win = false
var game = true
var sgame = false

var player = prompt("Enter player name")
var amount = prompt("Enter the amount")

function start(){
    sgame = true
    var num1 = getRandom()
    var num2 = getRandom()
    psum = num1 + num2
    pcard = [num1,num2]
    computer()
    render()
}

function render(){
    ctotal.innerHTML = "COMPUTER : "
    card.innerHTML="CARDS : "
    for(var i=0; i < pcard.length; i++) {
        card.innerHTML += `${pcard[i]} `
    }
    total.innerHTML="TOTAL : "
    total.innerHTML += `${psum}`
    ctotal.innerHTML += `${csum}`

    if(psum < 21) {
        message.innerHTML = "Do you want another card?"
    }
    else if(psum == 21 && csum < 21){
        amount *= 2
        message.innerHTML = `${player} won the game. They won ${amount} ₹  :)`
        win = true
    }
    else{
        message.innerHTML = `${player} lost ${amount} ₹  :(`
        game = false
    }
}

function getRandom() {
   var random =  Math.floor(Math.random()*13 + 1)
   if(random > 10){
    return 10
   }
   else if(random == 1) {
    return 11
   }
   else {
    return random
   }
}

function getNewCard(){
    if(win == false && game == true && sgame == true) {
    var num = getRandom()
    pcard.push(num)
    psum += num

    while(csum < 17) {
        var cnum = getRandom()
        csum += cnum
    }
    render()
    }
    if(psum > 21) {
    winner()
    }
}

function reset() {
    pcard.length = 0
    csum = 0
    psum = 0
    win = false
    game = true
    sgame = false
    card.innerHTML="CARDS : "
    total.innerHTML="TOTAL : "
    ctotal.innerHTML = "COMPUTER : "
    message.innerHTML = ``
}

function computer() {
    var cnum1 = getRandom()
    var cnum2 = getRandom()
    csum = cnum1 + cnum2
}

function winner() {
    if(sgame == true) {
    while(csum < 17 && csum < psum) {
        var cnum = getRandom()
        csum += cnum
    }
    ctotal.innerHTML = `COMPUTER : ${csum}` 
    if(psum > 21 || (csum <= 21 && csum > psum)){
        message.innerHTML = `${player} lost ${amount} ₹  :(`
    }
    else if(psum == csum) {
        message.innerHTML = "It is a tie :|"
    }
    else{
        amount *= 2
        message.innerHTML = `${player} won the game. They won ${amount} ₹ `
    }
    sgame = false
}
}