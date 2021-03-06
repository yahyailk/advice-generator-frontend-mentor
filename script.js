"use strict"

let dice = document.querySelector(".dice")
let adviceNo = document.querySelector(".advice_no")
let adviceInner = document.querySelector(".advice")

dice.addEventListener("click", getAdvicefromApi)

function getAdvicefromApi () {
    fetch("https://api.adviceslip.com/advice")
    .then((response) => {
        if(!response.ok){
            throw new Error("Information not found")
        }
        return response.json()
    })
    .then((data) => {
        let id = data.slip.id
        let advice = data.slip.advice
        adviceNo.innerHTML = "ADVICE #" + id;
        adviceInner.innerHTML = advice 
    })
    .catch((err) => errorMsg(err))
}

function errorMsg (err){
    adviceInner.innerHTML = err.message
}



