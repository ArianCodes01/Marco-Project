const menuIcon = document.querySelector(".menuIcon");
const sideBar = document.querySelector(".sideBar");

menuIcon.onclick = function () {
    if (sideBar.style.left === "0px") {
        sideBar.style.left = "-260px";
        menuIcon.classList.remove("fa-x");
        menuIcon.classList.add("fa-bars");
    } else {
        sideBar.style.left = "0px";
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-x");
    }
};