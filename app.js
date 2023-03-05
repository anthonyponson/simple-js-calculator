// const operationButton = Array.from(document.querySelectorAll('[data-operation-button]'))
// const operandButton = Array.from(document.querySelectorAll('[data-operand-button]'))
// const allClear = document.querySelector('[data-all-clear-button]')
// const equal = document.querySelector('[data-equal-button]')

const display = document.querySelector(".display")
let buttons = Array.from(document.getElementsByClassName("button"))

buttons.map((button) => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "AC":
                display.innerText = ''
                break;

            case '←':
                display.innerText = display.innerText.slice(0, -1)
                break;

            case '=':
                try {
                    display.innerText = eval(display.innerText)
                } catch {
                    display.innerText = 'Error'
                }

                break;

            default:
                display.innerText += e.target.innerText

        }
    });
});