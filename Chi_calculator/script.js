//classes
class Calculator {
    constructor(previousTextElement, currentTextElement) {
        this.previousTextElement = previousTextElement
        this.currentTextElement = currentTextElement
        this.clear()
    }

    clear() {
        this.previousValue = ''
        this.currentValue = ''
        this.operation = undefined
    }

    delete() {
        this.currentValue = this.currentValue.toString().slice(0, -1)
    }

    love() {
        this.previousValue = ''
        this.currentValue = msg
    }

    secret() {
        this.previousValue = "( o )( o )"
    }

    appendNumber(number) {
        if (number === '.' && this.currentValue.includes('.')) return
        this.currentValue = this.currentValue.toString() + number.toString()

        if (this.currentValue.includes('♥')) return
        if (this.currentValue == 5318008) {
            this.secret()
            this.loveDisplay()
        }
        if (this.currentValue == 1990828) {
            this.lars()
            this.loveDisplay()
        }
    }

    chooseOperation(operation) {
        if (this.currentValue === '') return
        if (this.previousValue !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousValue = this.currentValue
        this.currentValue = ''
    }

    compute() {
        let answer
        const prev = parseFloat(this.previousValue)
        const current = parseFloat(this.currentValue)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                answer = prev + current
                break
            case '-':
                answer = prev - current
                break
            case 'x':
                answer = prev * current
                break
            case '÷':
                answer = prev / current
                break
            default:
                return
        }
        this.currentValue = answer
        this.operation = undefined
        this.previousValue = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0 })
        }
        if(decimalDigits != null) {
            return `${ integerDisplay }.${ decimalDigits }`
        } else {
            return integerDisplay
        }
    }

    loveDisplay() {
        this.previousTextElement.innerText = this.previousValue
        this.currentTextElement.innerText = this.currentValue

    }

    updateDisplay() {
        this.currentTextElement.innerText =
            this.getDisplayNumber(this.currentValue)
        if (this.operation != null) {
            this.previousTextElement.innerText =
                `${ this.getDisplayNumber(this.previousValue) } ${ this.operation }`
        } 
        else if(this.previousValue == "( o )( o )"){
            ;
        }
        else {
            this.previousTextElement.innerText = ''
        }
    }
}

//constants
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousTextElement = document.querySelector('[data-previous-operand]')
const currentTextElement = document.querySelector('[data-current-operand]')
const loveButton = document.querySelector('[data-love]')

const calculator = new Calculator(previousTextElement, currentTextElement)

//logic section
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})

let isTimerOn = false;
loveButton.addEventListener('click', button => {
    calculator.love()
    calculator.loveDisplay()
    if(isTimerOn === false) {
        isTimerOn = true
        startTimer()     
    } else {
        isTimerOn = false
        stopTimer()
        msg = loveMsg
        calculator.clear()
        calculator.loveDisplay()
    }
})

var msg = "♥ ♥ ♥ i love you ♥ ♥ ♥ "
const loveMsg = "♥ ♥ ♥ i love you ♥ ♥ ♥ "
var scr_speed = 500 

function msgScroll() {
    msg = msg.substring(2, msg.length) + msg.substring(0, 2)
    calculator.love()
    calculator.loveDisplay()
}

function startTimer() {
    myTimer = setInterval(msgScroll, scr_speed)
}

function stopTimer() {
    clearInterval(myTimer)
}