/* const arr = [1, 2, 1, 3, 1]
const uniqArr = [... new Set(arr)]
console.log(uniqArr) */

// https://my-json-server.typicode.com/DimaVnuk/db-bookstore/books

const main = document.getElementById('main')


function getBooks(arr) {

    let arrFilter = [...arr]

    arr.forEach(i => {
        const card = document.createElement('div')
        const titleCard = document.createElement('p')
        const genreCard = document.createElement('p')
        const posterCard = document.createElement('img')
        const btnDelete = document.createElement('button')


        titleCard.textContent = i.name
        genreCard.textContent = i.genre
        posterCard.src = i.imageUrl
        posterCard.width = "50"
        card.classList.add('card')
        btnDelete.textContent = 'delete'

        function handleDelete() {
            card.remove()
        }
        btnDelete.addEventListener('click', handleDelete)

        card.append(titleCard, genreCard, posterCard, btnDelete)
        main.append(card)

        function addedColor() {
            card.classList.toggle('card-color')
        }

        card.addEventListener('click', addedColor)

    });

    const sortByName = document.createElement('button')
    sortByName.textContent = 'sort by name'

    const btnFilterByHorror = document.createElement('button')
    btnFilterByHorror.textContent = 'filter by horror'

    const btnGetall = document.createElement('button')
    btnGetall.textContent = 'update'

    

    main.prepend(sortByName, btnFilterByHorror, btnGetall)

    function handleSortByName() {
        arr.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
        main.innerHTML = ""
        getBooks(arr)
    }

    sortByName.addEventListener('click', handleSortByName)
    btnFilterByHorror.addEventListener('click', handleHorror)

    function handleAllBooks() {
        main.innerHTML = ""
        getFetch(getBooks)
    }
    btnGetall.addEventListener('click', handleAllBooks)

    function handleHorror() {
        arrFilter = arr.filter(({ genre }) => genre === 'Horror')
        main.innerHTML = ""
        getBooks(arrFilter)
    }
}

function getFetch(arr) {
    fetch(
        'https://my-json-server.typicode.com/DimaVnuk/db-bookstore/books')
        .then(res => res.json())
        .then(data => arr(data))


}
getFetch(getBooks)


/* const inp = document.getElementById('inp')

function testChange(e){ 
    console.log(e.target.value)
} */
/* inp.addEventListener('change', testChange)  */
/* inp.addEventListener('input', testChange) */ 
/* inp.addEventListener('blur', testChange) */
/* inp.addEventListener('focus', testChange) */

/* const link = document.getElementById('link')

function() {
    e.preventDefault()
    
}
link.addEventListener('click', testDefault) */


const inp = document.getElementById('inp')
const error = document.getElementById('error')

function testChange(e){ 
    if(e.target.value.length > 3){
        error.textContent = '<3'
        error.style.color = 'red'
        inp.style.border = '5px solid red'
    } else{
        error.textContent = ''
        error.style.color = ''
        inp.style.border = ''
    }
}
inp.addEventListener('input', testChange) 


/* const obj = {
    a: 1,
    b: 2,
}
const {a, b} = obj
console.log(a) // деструкциризация */