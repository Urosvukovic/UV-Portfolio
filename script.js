window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

function toggle(){
    //smoothScroll(event);

    var header = document.querySelector("header");
    header.classList.toggle("active");
}

//const scroll = new SmoothScroll('header ul li a[href*="#"]');

/*function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    window.scrollTo({
        top: document.querySelector(targetId).offsetTop,
        behavior: "smooth"
    });
}*/