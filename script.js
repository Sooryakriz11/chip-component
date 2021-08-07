//elements
let chipCont = document.querySelector('.chip-container');
let input = document.querySelector('.input');

let num = 1

//add chip
const addChip = () => {
    let txt = input.value
    num = num > 7 ? 1 : num
    let txt_status = txt.replace(/\s/g, "")
    if (txt_status != "") {
        chipCont.innerHTML += `<div class="chip between col-${num}">${txt} <i class="ri-close-line" onclick="deleteChip(event)"></i></div>`
    }
    input.value = null
    input.focus()
    num++
}

//delete chip
const deleteChip = (e) => {
    e.target.parentNode.remove()
}

// space key event listener
input.addEventListener('keyup', (e) => {
    if (e.code === "Space") {
        addChip()
    }
})