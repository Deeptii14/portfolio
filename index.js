const mobileMenuButton = document.getElementById("mobile-menu");
const menu = document.getElementById("menu");

mobileMenuButton.addEventListener("click", () => {
  menu.classList.toggle("active");
  console.log("btn clicked");
});
