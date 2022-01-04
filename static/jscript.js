console.log("Welcome to Let's Coffee.com");
let navbar = document.querySelector('.navbar');

document.querySelectorAll('#menu-btn').onlick = () => {
    navbar.classList.toggle('active') 
    searchform.classList.remove('active');
    cartItem.classList.remove('active');
     
}

let searchform = document.querySelector('.search-form');

document.querySelectorAll('#search-btn').onlick = () => {
    searchform.classList.toggle('active');
    navbar.classList.remove('active');  
    cartItem.classList.remove('active');
     
}

let cartItem = document.querySelector('.cart-item-container');

document.querySelectorAll('#cart-btn').onlick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');  
    searchform.classList.remove('active');
     
}
// let cartItem = document.querySelector('.cart-item-container');

// document.querySelectorAll('#cart-btn').onlick = () => {
//     cartItem.classList.toggle('active');
// }

window.onscroll = () =>{
    navbar.classList.remove('active');  
    searchform.classList.remove('active');
    cartItem.classList.remove('active');

}