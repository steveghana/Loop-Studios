let hamburger = document.querySelector('.hamburger')
let navlist = document.querySelector('.navlist')

hamburger.addEventListener('click', ()=>{
    navlist.classList.toggle('hugeclip')
})

addEventListener('scroll',()=>{
    let header = document.querySelector('.mainhead')
    let parallex = document.querySelector('header')
    let scrollY = window.pageYOffset
    let scrollX = window.pageXOffset
    console.log(scrollY)
    parallex.style.transform = 'translateY('+ scrollY * .3 + 'px)'
    header.style.transform = 'translateX('+ scrollY * -.3 + 'px)'
let main = document.querySelector('main')
main.style.opacity = 1
})