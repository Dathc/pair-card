import Card from './card.js'
let clicks = 0
let time = 0
let cards = 0
let score = 0
const startBtn = document.querySelector('#start')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const screens = document.querySelectorAll('.screen')

startBtn.addEventListener('click', (event) => {
        event.preventDefault()
        screens[0].classList.add('up')
    })


timeList.addEventListener('click', event => {
        if (event.target.classList.contains('time-btn')) {
            time = parseInt(event.target.getAttribute('data-time'))
            cards = parseInt(event.target.getAttribute('cards'))
            screens[1].classList.add('up')
            
            newGame(document.getElementById('game'),cards)
        }
    })


function newGame(container, cardsCount) {
    setInterval(decreaseTime, 1000)
    // startScreen()
        //Создаем поле
    let cardsNumberArray = [],
        cardsArray = [],
        firstCard = null,
        secondCard = null
    for (let i = 1; i <= cardsCount / 2; i++) {
        cardsNumberArray.push(i)
        cardsNumberArray.push(i)

    }

    cardsNumberArray = cardsNumberArray.sort(() => Math.random() - 0.5)

    for (const cardNumber of cardsNumberArray) {
        cardsArray.push(new Card(container, cardNumber, flip))
    }
    //Логика
    function flip(card) {
       
       if (firstCard !== null && secondCard !== null) {
            if (firstCard.number != secondCard.number) {
                firstCard.open = false
                secondCard.open = false
                firstCard = null
                secondCard = null
            }
              
         }
        if (firstCard == null) {
            firstCard = card
        } else {
            if (secondCard == null) {
                secondCard = card
            }
        }
        if (firstCard !== null && secondCard !== null) {
            if (firstCard.number == secondCard.number) {
                firstCard.success = true
                secondCard.success = true
                score++
                firstCard = null
                secondCard = null
            }
        }
        if (document.querySelectorAll('.card.success').length == cardsNumberArray.length) {
           console.log('game over')
        }
    }
}
function decreaseTime() {
    if (time === 0) {
        finishGame()
        console.log('time out')
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}
function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}
function finishGame() {
    timeEl.parentNode.classList.add('hide')
    game.innerHTML = `<h1 class="check">Найдено пар: <span class="primary">${score}</span></h1>`

    setInterval(function() {
        location.reload()
    }, 2000);
}
