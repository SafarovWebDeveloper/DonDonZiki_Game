window.addEventListener('DOMContentLoaded', ()=>{
    let choice = document.querySelectorAll('.choice'),
        all = document.querySelector('.choices'),
        deposit = document.querySelector('.deposit')
        score = document.querySelector('#score'),
        balance = document.querySelector('#balance')
        modal = document.querySelector('.modal'),
        result = document.querySelector('#result'),
        restart = document.querySelector('#restart'),
        form = document.querySelector('.withdraw-form'),
        depostForm = document.querySelector('.deposit-form'),
        withdraw = document.querySelector('#withdraw'),
        closeBtn = document.querySelector('.close'),
        closeBtn2 = document.querySelector('.close-2'),
        withdrawBtn = document.querySelector('.withdraw-form-btn'),
        input1 = document.querySelector('.i-1'),
        input2 = document.querySelector('.i-2'),
        hideText = document.querySelector('.hide_text'),
        ned = document.querySelector('.ned'),

            scoreBoard = {
            player: 0,
            computer: 0,
        }

        balanceBoard = {
            balance: 1,
        }
    console.log(scoreBoard)
    // DEPOSIT FORM
    deposit.addEventListener('click', function (){
        depostForm.style.display = 'block'
    })
    closeBtn2.addEventListener('click',function (){
        depostForm.style.display = 'none'
    })

// WITHDRAW FORM
    withdraw.addEventListener('click', function (){
        form.style.display = 'block'
    })
    closeBtn.addEventListener('click',function (){
        form.style.display = 'none'
    })
    withdrawBtn.addEventListener('click', function (){


        if(input1.value === ""){
            hideText.textContent = 'PLEASE ENTER YOUR PAYEER NUMBER'
        }else if(input2.value === "" ){
            hideText.textContent = 'PLEASE ENTER MONEY'
        }else if(balanceBoard === 15){
            confirm('Your money will be send with 3 days')
        }else{
            alert(`Minimum withdraw 15$ (You have ${balanceBoard.balance}$} `)
        }
    })
// PLAY GAME
    function play(event){
        const playerChoice = event.target.id
        const computerChoice = getComputerChoice()
        const winner = getWinner(playerChoice , computerChoice)
        showWinner(winner, computerChoice)
        addMoney(winner, computerChoice)
        stopGame()
    }


//GET COMPUTER CHOICE
    function getComputerChoice() {
        const rand = Math.floor(Math.random() * 99)
        if(rand <= 33){
            return 'rock'
        }
        else if(rand <= 66 ){
            return 'paper'
        }
        else{
            return 'scissors'
        }
    }
//GET WINNER
    function getWinner(p , c) {
        if(p === c){
            return 'draw'
        }
        else if(p === 'rock'){
            if(c === 'paper'){
                return 'computer'
            }else{
                return 'player'
            }
        }
        else if(p === 'paper'){
            if(c === 'scissors'){
                return 'computer'
            }else{
                return 'player'
            }
        }
        else if(p === 'scissors'){
            if(c === 'rock'){
                return 'computer'
            }else{
                return 'player'
            }
        }
    }
// show winner
    function showWinner(winner , computerChoice) {

        if(winner === 'player'){
            result.innerHTML = `
                <h1 class='text-win'>You win</h1>
                <i class='fa fa-hand-${computerChoice} fa-10x'></i>
                <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
            `
        }
        else if(winner === 'computer'){
            result.innerHTML = `
                <h1 class='text-lose'>You Lose</h1>
                <i class='fa fa-hand-${computerChoice} fa-10x'></i>
                <p> Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
            `
        }else{
            result.innerHTML = `
                <h1 class="text-draw"> It's a draw </h1>
                <i class='fa fa-hand-${computerChoice} fa-10x'> </i>
                <p> Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} </strong></p>
            `
        }

        modal.style.display = 'block'
    }

    function addMoney(winner){
        if(winner === 'player' ){
            balanceBoard.balance += 0.5
            balance.innerHTML = ` 
            <p>Balance: ${balanceBoard.balance} $</p>
            `
        }else if(winner === 'computer'){
            balanceBoard.balance -= 0.5
            balance.innerHTML = ` 
            <p>Balance: ${balanceBoard.balance} $</p>
            `
        }
        else{
            balance.innerHTML = ` 
            <p>Balance: ${balanceBoard.balance} $</p>
            `
        }
    }

    // RESTART GAME
    function restartGame () {
        scoreBoard.player = 0
        scoreBoard.computer = 0
        balanceBoard.balance = 0
        score.innerHTML = `
            <p>Player: ${scoreBoard.player} </p>
            <p>Computer: ${scoreBoard.computer} </p>
        `
        balance.innerHTML = ` 
            <p>Balance: ${balanceBoard.balance} $</p>
            `
    }
// STOP GAME
    function stopGame(){
        if( balanceBoard.balance === 0 ){
            deposit.style.display = 'block'
            all.style.display = 'none'

            setTimeout(()=>{
                confirm( "You lost all money " + balanceBoard.balance)
            },1000)


        }else if( balanceBoard.balance === 9.5 ){
            all.style.display = 'none'
            score.style.display = 'none'
        }
        else{
            balance.innerHTML = ` 
            <p>Balance: ${balanceBoard.balance} $</p>
            `
        }
    }

// CLEAR MODAL
    function clearModal (event) {
        if(event.target === modal){
            modal.style.display = 'none'
        }
    }
// MONEY ADD

   // EVENT
    choice.forEach( choice => choice.addEventListener('click', play ));
    window.addEventListener('click', clearModal)
    restart.addEventListener('click', restartGame)
} )

