import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js"


const appSettings = {
    databaseURL: "https://shoppinglist-b94c9-default-rtdb.europe-west1.firebasedatabase.app"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-text")
const addButtonEl = document.getElementById("add-btn")
const shoppingListEl = document.getElementById("shopping-list")

addButtonEl.addEventListener("click", function(){
    let inputValue = inputFieldEl.value
    push(shoppingListDB, inputValue)
    clearinputFieldEl()
    appendShoppingListEl(inputValue)
})

function clearinputFieldEl(){
    inputFieldEl.value = ""
}

function appendShoppingListEl(addedItem) {
    shoppingListEl.innerHTML += `<li>${addedItem}</li>`
}

onValue(shoppingListDB, function(snapshot) {

})