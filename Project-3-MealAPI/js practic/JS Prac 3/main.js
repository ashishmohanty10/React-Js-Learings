

let isStatus = document.querySelector("#h1")

let icon = document.querySelector("i")

let con = document.querySelector("#container")
let check =0

con.addEventListener("dblclick",function(){

    if(check == 0){
        icon.style.transform = "translate(-50%,-50%) scale(8)"
        icon.style.opacity = '0.8'
        isStatus.style.color = "green"

        setTimeout(function(){
        icon.style.opacity = 0
        },1000)

        setTimeout(function(){
        icon.style.transform = 'translate(-50%,-50%) scale(0)'
        },2000)

        check  = 1
    }else{
        icon.style.transform = "translate(-50%,-50%) scale(8)"
        icon.style.opacity = '0.8'
        isStatus.style.color = "white"

        setTimeout(function(){
        icon.style.opacity = 0
        },1000)

        setTimeout(function(){
        icon.style.transform = 'translate(-50%,-50%) scale(0)'
        },2000)

        check = 0
    }
})


let bod = document.querySelector("#main")

let crsr = document.querySelector("#cursor")

bod.addEventListener("mousemove",function(dets){

    crsr.style.left = dets.clientX + "px"

    crsr.style.top = dets.clientY + "px"
})