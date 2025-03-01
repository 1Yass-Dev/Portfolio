document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
    
    document.addEventListener("click", (event) => {
        if (!menuIcon.contains(event.target) && !navbar.contains(event.target)) {
            navbar.classList.remove("active");
        }
    });
});
