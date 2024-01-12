let isStatus = document.querySelector('#NF')
let btn1 = document.querySelector('#btn-1')
let check =0

btn1.addEventListener("click",function(){
  if(check == 0){
    
    isStatus.innerHTML = "Followed"
    isStatus.style.color = "green"
    btn1.innerHTML = "Unfollow"
    check = 1
  }
  else {
    isStatus.innerHTML = "Unfollow"
    isStatus.style.color = "red"
    btn1.innerHTML = "Follow"
    check = 0
  }
})

let con = document.querySelector('#container1')
let icon = document.querySelector('#heart')

con.addEventListener("dblclick",function(){
  icon.style.transform =' translate(-50%,-50%) scale(2)'
  icon.style.opacity = '0.8'
  setTimeout(function(){
    icon.style.opacity = 0
  },1000)

  setTimeout(function(){
    icon.style.transform = 'translate(-50%,-50%) scale(0)'
  },2000)
})

// CURSOR 
let crsr = document.querySelector('#cursor')
let mn = document.querySelector('#main')

mn.addEventListener('mousemove',function(p){
  crsr.style.left = p.clientX + 'px'
  crsr.style.top = p.clientY + 'px'
})