let turn = "X"
let disabled = false
let color = "rgb(182, 68, 22)"


function getColor(){
    return color === "rgb(182, 68, 22)"?"rgb(111, 140, 236)":"rgb(182, 68, 22)"
}
const board = document.querySelector('.board')

function checkWin(){
    const c = document.getElementsByClassName('cell')
    const wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    return wins.some((elem)=>{
        return elem.every(e=>{
            return c[e].classList.contains(turn)
        })
    })
}
let cells = document.getElementsByClassName('cell')

function reset(){
    document.location.href = "/"
}

Array.from(cells).forEach((element)=>{
    
    
    element.addEventListener("click",()=>{
            if(disabled !== true){
            if(element.innerText === ''){
                const tile = document.createElement("div")
                tile.classList.add("tile")
                tile.innerText = turn
                tile.style.backgroundColor = getColor()
                color = getColor()
                element.append(tile)
                element.classList.add(turn)
                win = checkWin()
                if(win){
                    console.log(turn,"wins")
                    document.querySelector('.board').classList.add('disabled')
                    disabled = true
                    document.querySelector(".h1").innerHTML = `${turn} Wins!`
                }
            }
            turn = changeTurn()
        }
        })

})

function changeTurn(){
    return  turn === 'X'?"0":"X"
    
}