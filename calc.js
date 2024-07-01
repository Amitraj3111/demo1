let inputBox = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')
let eqBtn = document.querySelector('#eqBtn')

let string = ''

console.log(eqBtn)
eqBtn.addEventListener("click", () => {
    console.log(9+9)
})

buttons.forEach(Element => {
    Element.addEventListener('click', (b) => {
        if (b.target.innerText == '=') {
            string = string(eval(string))
            inputBox.value = string;
        }
        else if (b.target.innerText == 'AC') {
            string = ''
            inputBox.value = string;
        }
        else if (b.target.innerText == 'DEL') {
            string = string.substring(0, string.length - 1)
            inputBox.value = string;
        }
        else {
            string += b.target.innerText
            inputBox.value = string
        }
    })
})