const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");
    const nav = document.querySelectorAll(".nav-links li");
    console.log(nav);
    burger.addEventListener('click',()=> {
        navLinks.classList.toggle("nav-active");
    });
}



navSlide();