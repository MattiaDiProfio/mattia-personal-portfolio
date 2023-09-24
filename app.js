//manage the hamburger menu

const toggleHamburgerMenu = () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const menuIcon = document.querySelector(".hamburger-icon");
const menuLinks = document.querySelectorAll(".menu-link");

const menuElements = [menuIcon, ...menuLinks];
menuElements.forEach(el => el.addEventListener("click", () => toggleHamburgerMenu()));
