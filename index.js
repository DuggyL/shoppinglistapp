const inputFieldEl = document.getElementById("input-text")
const addButtonEl = document.getElementById("add-btn")

addButtonEl.addEventListener("click", function(){
    let inputValue = inputFieldEl.value
    console.log(inputValue)
})