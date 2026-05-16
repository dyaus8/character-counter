const textar = document.getElementById("textar")
const totalCounter = document.getElementById("total-counter")
const remainingCounter = document.getElementById("remaining-counter")

updateCounter()

textar.addEventListener("keyup",()=>{
    updateCounter()
})

function updateCounter(){
    totalCounter.innerText = textar.value.length
    remainingCounter.innerText = textar.getAttribute("maxlength") - textar.value.length
}

