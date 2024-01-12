let mn = document.querySelector("#main")
let crsr = document.querySelector(".cursor")

mn.addEventListener("mousemove",function(event){
  crsr.style.left = event.clientX + 'px'
  crsr.style.top = event.clientY + 'px'

})