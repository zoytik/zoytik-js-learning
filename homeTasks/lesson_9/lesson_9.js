/* lesson 9 */

// 1

/* let text = prompt('Введите текст')
alert(text) */

//2

/* let firstNumber = prompt('введите первое число')
let secondNumber = prompt('ведите второе число')
let Sumnumber = +firstNumber + +secondNumber
alert(`сумма ${Sumnumber}`)
 */

//3

/* let userName = prompt('имя пользователя', '')
let userAge = prompt('возраcт пользователя', '')
if(userAge >= 18){
  alert(`Добро
  пожаловать ${userName}`)
} else{
  alert(`Простите, ${userName}, доступ закрыт`)
} */

//4

/* let oneBlock = confirm('Хотите ввести название блока?')
if (oneBlock) {
  oneBlock = prompt('окно для ввода названия блока', '')
} else {
  console.log(confirm('элементу не присвоен класс'))
}

let oneElement = confirm('Хотите ввести название  элемента?')
if (oneElement) {
  oneElement = prompt('окно для ввода названия элемента', '')
} else {
  console.log(confirm('элементу не присвоен класс'))
}

let oneModifier = confirm('Хотите ввести название  модификатора?')
if (oneModifier) {
  oneModifier = prompt('окно для ввода названия элемента', '')
  alert(oneBlock + oneElement + oneModifier)
  console.log(oneBlock + oneElement + oneModifier)
} else {
  alert(oneBlock + oneElement)
  console.log(oneBlock + oneElement)
}
 */

//5

/* let firstNumber = +prompt(' введите первое число')
let secondNumber = +prompt(' введите второе число')
let sumNumber = prompt('выберите нужную арифметическую операцию (division, plus, multiply, minus)')

if (sumNumber === 'division') {
  alert(sumNumber = firstNumber /= secondNumber)
} else if (sumNumber === 'multiply') {
  alert(sumNumber = firstNumber *= secondNumber)
} else if (sumNumber === 'plus') {
  alert(sumNumber = firstNumber += secondNumber)
} else if (sumNumber === 'minus') {
  alert(sumNumber = firstNumber -= secondNumber)
} else {
  alert('Не верная арифметическая операция')
} */