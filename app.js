let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let li = document.querySelectorAll('.nav')
menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

li.onclick = ()=>{
    menu.classList.remove('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}