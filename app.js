// nav-bar

window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY >0);

});

// sidebar menue
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a")

menuBtn.addEventListener("click", ()=>{
    menuBtn.classList.toggle("active");
    console.log(" make it active");
    navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItems)=> {
    navigationItems.addEventListener("click", ()=> {
        menuBtn.classList.remove("active");
        console.log(" remove it active");
        navigation.classList.remove("active");
    });
});


// scroll 

const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    
    scrollBtn.classList.toggle('active', window.scrollY >500);

});

// back to Top

scrollBtn.addEventListener("click", function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

});

// reveal website elements on scroll

window.addEventListener("scroll", reveal);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for(var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 50;

        if(revealTop <windowHeight -revealPoint){
            reveals[i].classList.add("active");

        }

    }
}


