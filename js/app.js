let searchForm = document.querySelector(".search-from-container");
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle('active')
  shoppingCart.classList.remove('active')
  loginForm.classList.remove('active')
    navbar.classList.remove('active')
}
let shoppingCart = document.querySelector(".shopping-cart-container");
document.querySelector("#cart-btn").onclick = () => {
  shoppingCart.classList.toggle('active')
  searchForm.classList.remove('active')
  loginForm.classList.remove('active')
    navbar.classList.remove('active')
}
let loginForm = document.querySelector(".login-form-container");
document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle('active')
  searchForm.classList.remove('active')
  shoppingCart.classList.remove('active')
    navbar.classList.remove('active')
}
let navbar = document.querySelector(".header .navbar")
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle('active')
  loginForm.classList.remove('active')
  searchForm.classList.remove('active')
  shoppingCart.classList.remove('active')
}

window.onscroll = () => {
  navbar.classList.remove('active')
  loginForm.classList.remove('active')
  searchForm.classList.remove('active')
  shoppingCart.classList.remove('active')
}

document.querySelector('.home').onmousemove = (e) => {
  let x = (window.innerWidth - e.pageX * 2)/90
  let y = (window.innerHeight - e.pageY * 2)/90
  document.querySelector('.home .home-parallax-img').style.transform = `translate(${y}px, ${x}px)`
}
document.querySelector('.home').onmouseleave = () => {
  document.querySelector('.home .home-parallax-img').style.transform = `translate(0)`
}