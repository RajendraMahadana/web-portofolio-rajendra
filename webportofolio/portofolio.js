const navNavbar = document.querySelector(".nav-navbar");

document.querySelector("#sidebar-btn").onclick =() => {
    navNavbar.classList.toggle("active");
};

const menu = document.querySelector("#sidebar-btn");

document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !navNavbar.contains(e.target)) {
        navNavbar.classList.remove("active");
    }
});

var type = new Typed(".auto-type", {
    strings : ["Programmer", "Designer"],
    typeSpeed : 100,
    backSpeed : 150,
    loop : true

});

