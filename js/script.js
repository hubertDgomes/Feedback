let outFed = document.querySelector(".outFed")
let inputFed = document.querySelector(".inputFed")
let btn1 = document.querySelector(".btn1")
let warMSG = document.querySelector(".warMSG")
let btn2 = document.querySelector(".btn2")

btn1.addEventListener("click", function(){
    if(inputFed.value == ""){
        warMSG.style.display = "block"
    }
    else{
        outFed.innerHTML = inputFed.value
    }
})
btn2.addEventListener("click", function(){
    outFed.innerHTML = ""
    inputFed.value = ""
})