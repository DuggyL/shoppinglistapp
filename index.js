import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js"
import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js"


const appSettings = {
    databaseURL: "https://shoppinglist-b94c9-default-rtdb.europe-west1.firebasedatabase.app"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingList = ref(database, "shoppinglist")

console.log(app)

const inputFieldEl = document.getElementById("input-text")
const addButtonEl = document.getElementById("add-btn")

addButtonEl.addEventListener("click", function(){
    let inputValue = inputFieldEl.value
    console.log(inputValue)
})