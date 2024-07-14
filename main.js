let maneu = document.querySelector("#maneu")
let Ulelements = document.querySelector("#links")
let buttons = document.querySelector("#Btns")
let close = document.querySelector("#close")

maneu.addEventListener("click",function(){
    links.style.display= "flex"
    buttons.style.display = "block"
    maneu.style.display = "none"
    close.style.display = "block"
})

close.addEventListener("click", function(){
    links.style.display= "none"
    buttons.style.display = "none"
    maneu.style.display = "block"
    close.style.display = "none"

})