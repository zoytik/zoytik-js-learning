//1 
let useFirst = prompt('Укажите Имя Пользвателя')
let useLast = prompt('Укажите Фамилию Пользвателя')
let nickName = prompt('Укажите Никнейм Пользвателя')
 
if (useFirst && useLast && nickName) {
    alert(`${useFirst}  ${useLast}`)
} else if (useFirst && useLast) {
    alert(`${useFirst} ${useLast}`)
} else if (nickName && useLast) {
    alert(`${nickName}`)
} else if (nickName && useFirst) {
    alert(`${useFirst}`)
} else {
    alert('Noname')
}

//2 