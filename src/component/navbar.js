const navbarMenu = document.querySelector(".menu")
const navbarClose = document.querySelector(".closeMenu")
const nav = document.querySelector(".nav-com")

function toggleMenu(value){
  value == "open"? openNavbarMenu():closeNavbarMenu()
}
function openNavbarMenu(){
  navbarMenu.style.display ="none"
  navbarClose.style.display ="block"
  nav.classList.add("active")
}
function closeNavbarMenu(){
  nav.classList.remove("active")
  navbarMenu.style.display ="block"
  navbarClose.style.display ="none"
}