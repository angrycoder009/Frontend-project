const form = document.querySelector("form")
const cont = document.querySelector("section")
const card = document.querySelector(".card")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
   cont.classList.add("hide")
   card.classList.remove("hide")

})