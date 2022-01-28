// target the html element by id

const navMenu= document.getElementById('nav-menu'),
toggleMenu=document.getElementById('toggle-menu'),
closeMenu=document.getElementById('close-menu')


// apply class for show and hide
toggleMenu.addEventListener('click',()=>{
    navMenu.classList.toggle('show')
})
closeMenu.addEventListener('click',()=>{
    navMenu.classList.remove('show')
})
