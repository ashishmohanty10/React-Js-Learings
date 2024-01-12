let isStatus = document.querySelector("h1")
let btn = document.querySelector("button")

let check = 0

btn.addEventListener("click",function(){
    if(check == 0){
        btn.innerHTML = "Unlike"
        isStatus.style.color = "green"
        btn.style.backgroundColor = "red"
        check = 1
    }

    else{
        isStatus.style.color = "white"
        btn.innerHTML = "Like"
        btn.style.backgroundColor = "white"
        check =0
    }
})

let con = document.querySelector("#container")
let icon = document.querySelector("i")

con.addEventListener("dblclick",function(){
    icon.style.transform = 'translate(-50%,-50%) scale(2)'
    icon.style.opacity = 0.8

    setTimeout(function(){
        icon.style.opacity = 0
    },1000)

    setTimeout(function(){
        icon.style.transform = 'translate(-50%,-50%) scale(0)'
      },2000)
})

let bod = document.querySelector("#main")
let crsr = document.querySelector("#cursor")

bod.addEventListener('mousemove',function(p){
    crsr.style.left = p.clientX + 'px'
    crsr.style.top = p.clientY + 'px'
  })

