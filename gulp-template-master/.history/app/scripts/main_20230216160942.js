// window.addEventListener("load", function () {
//   const toggle = document.querySelector(".menu-toggle");
//   const menu = document.querySelector(".menu");
//   toggle && toggle.addEventListener("click", handleToggleMenu);
//   function handleToggleMenu(e) {
//     menu && menu.classList.add("is-show");
//   }
//   document.addEventListener("click", handleClickOutside);
//   function handleClickOutside(e) {
//     if (e.target.matches(".menu-toggle") || e.target.matches(".menu, .menu *"))
//       return;
//     menu && menu.classList.remove("is-show");
//   }
// });

const menuToggle = document.querySelector(".header-toggle");
const menuHeader = document.querySelector(".header-menu");
const expandClass = "is-expand";
menuToggle.addEventListener('click', () =>
{
  menuHeader.classList.add(expandClass);
});
window.addEventListener('click', function(e){

})  
