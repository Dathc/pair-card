export default class Card {
    _open = false
    _success = false
   
    constructor(container, number, action) {
        this.card = document.createElement('div')
        this.card.classList.add('card')
        
        this.card.textContent = number
        this.number = number
        this.card.addEventListener('click', () => {
            if (this.open == false && this.success == false) {
                this.open = true

                action(this)
            }

            
        })

        container.append(this.card)
    }

    set open(value) {
        this._open = value
        value ? this.card.classList.add('open' ,'fast-flicker'): this.card.classList.remove('open', 'fast-flicker')
    }
    get open() {
        return this._open
    }
    set success(value) {
        this._success = value
        value ? this.card.classList.add('success'): this.card.classList.remove('success')
    }
    get success() {
        return this._success
    }
}







//--калбэк функция
function my(n) {
    console.log(n);
}

function hello(i) {
    console.log('Hello')
    i('Nikolay')
}

hello(my)